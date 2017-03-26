// import 'webrtc-adapter';
/* eslint-disable */

function SignalingChannel(args) {
  var url = args.url;
  var chat = args.chat;
  var iceServers;
  var peersCount = 0;
  var pingTimer;
  var messageHandler;
  var remoteStarted = false;
  var remoteStartHandler;
  var getIceServersHandler;
  var schema = url.indexOf('localhost') === -1 ? 'wss://' : 'ws://';
  var ws;
  ws = new WebSocket(schema + url + '?chatId=' + chat);
  var pingTimes = 0;
  ws.onopen = function () {
    console.log('open');
    pingTimer = setInterval(function () {
      pingTimes++;
      ws.send('ping');
      if (pingTimes >= 3) {
        clearInterval(pingTimer);
      }
    }, 20 * 1000);
  };

  ws.onmessage = function (evt) {
    var resp = JSON.parse(evt.data);
    if (resp.count != null) {
      console.log(resp);
      if (peersCount === 0 && resp.count > 1) {
        ensureGetIceServers();
        console.log('send start');
        // say start when some one alreay in room
        send({ start: 1 });
      }
      peersCount = resp.count;
      if (peersCount < 2) {
        remoteStarted = false;
      }
    } else if (resp.start) {
      ensureGetIceServers();
      console.log('receive start');
      remoteStarted = true;
      checkRemoteStart();
    } else if (resp.s) {
      if (resp.s !== 200) {
        console.error(resp);
      }

      if (iceServers == null) {
        iceServers = resp.d ? resp.d.iceServers || [] : [];
        console.log('get ice servers:', iceServers);
        iceServers.push(DEFAULT_STUN_SERVER);
        if (getIceServersHandler) getIceServersHandler(iceServers);
      }
    } else {
      if (messageHandler)
        messageHandler(resp);
    }
  };

  ws.onclose = function () {
    reset();
  };

  var DEFAULT_STUN_SERVER = { urls: 'stun:stun.l.google.com:19302'};

  function ensureGetIceServers() {
    if (iceServers == null) {
      iceServers = [DEFAULT_STUN_SERVER];
      if (getIceServersHandler) getIceServersHandler(iceServers);
    }
  }

  function resetState() {
    clearInterval(pingTimer);
    remoteStarted = false;
    iceServers = null;
    peersCount = 0;
  }

  function reset() {
    resetState();
    getIceServersHandler = null;
    messageHandler = null;
    remoteStartHandler = null;
  }

  function checkRemoteStart() {
    if (remoteStarted && remoteStartHandler) {
      remoteStartHandler();
    }
  }

  function send(data) {
    ws.send(JSON.stringify(data));
  }

  function close() {
    try {
      reset();
      ws.onerror = null;
      ws.close();
    } catch (e) {
      console.error(e);
    }
  }

  this.send = send;
  this.close = close;

  this.onRemoteStart = function (fn) {
    remoteStartHandler = fn;
    checkRemoteStart();
  };

  this.onMessage = function (fn) {
    messageHandler = fn;
  };

  this.onGetIceServers = function (fn) {
    getIceServersHandler = fn;
    if (iceServers) {
      if (fn) fn(iceServers);
    }
  };
}

function P2PChat(args) {
  var chat = args.chat;
  var localVideo = args.localVideo;
  var remoteVideo = args.remoteVideo;
  var url = args.url;
  var handlers = [];
  var connection = null;
  var localStream;
  var remoteStream;
  var useRelayOnly = false;

  function handleSignal(conn, signal) {
    console.log(signal);
    var pc = conn.peerConn;
    var chan = conn.signalingChannel;

    if (signal.offer) {
      console.log('receive offer:', signal.offer);
      console.log('pc.signalingState:', pc.signalingState)
      pc.setRemoteDescription(new RTCSessionDescription(signal.offer))
        .then(function () {
          return pc.createAnswer()
        })
        .then(function (answer) {
          return pc.setLocalDescription(answer)
        })
        .then(function () {
          chan.send({ answer: pc.localDescription });
          return Promise.resolve();
        })
        .catch(function (err) {
          console.error(err);
          restart(conn);
        });
    }

    if (signal.answer) {
      console.log('receive answer:', signal.answer);
      console.log('pc.signalingState:', pc.signalingState)
      pc.setRemoteDescription(new RTCSessionDescription(signal.answer))
        .then(function () {
          console.log('set answer success');
          return Promise.resolve();
        })
        .catch(function (err) {
          console.log(err);
          restart(conn);
        });
    }

    if (signal.candidate) {
      console.log('receive candidate:', signal.candidate);
      console.log('pc.iceGatheringState', pc.iceGatheringState);
      pc.addIceCandidate(new RTCIceCandidate(signal.candidate))
        .catch(function () {
          restart(conn);
        });
    }

    if (signal.stop) {
      console.log('receive stop');
      this.stop();
    }

    if (signal.restart) {
      console.log('receive restart');
      restart(conn, true);
    }
  }

  var restartCount = 0;
  function restart(conn, signalRestart) {
    restartCount++;
    console.log('restart:', restartCount);

    if (!signalRestart) {
      conn.signalingChannel.send({ restart: 1 });
    }
    //避免重复不停地restart
    if (restartCount <= 5) {
      reset(conn);
      start();
    } else {
      reset(conn);
      resetLocal();
      fireEvent('error', 'P2PChat Error: restart more than 5 times');
    }
  }

  function sendOffer(conn) {
    var pc = conn.peerConn;
    var chan = conn.signalingChannel;

    console.log('sendOffer');
    pc.createOffer()
      .then(function (offer) {
        console.log('create offer:', offer);
        return pc.setLocalDescription(offer);
      })
      .then(function () {
        console.log('send offer:', pc.localDescription);
        chan.send({ offer: pc.localDescription });
        return Promise.resolve();
      }).catch(function (e) {
        console.error(e);
        restart(conn);
      });
  }

  function requirePermission(isVideo) {
    return navigator.mediaDevices
      .getUserMedia({ "audio": false, "video": isVideo ? { facingMode: "user" } : false })
      .then(function (stream) {
        resetLocal();
        console.log('add local stream');
        localStream = stream;
        localVideo.autoplay = true;
        localVideo.muted = true;
        localVideo.srcObject = localStream;

        return Promise.resolve();
      });
  }

  function getStats() {
    if (conn.peerConn) {
      conn.peerConn.getStats().then(console.log);
      return conn.peerConn.getStats();
    } else {
      return Promise.resolve();
    }
  }

  function resetLocal() {
    if (localStream) stopStream(localStream);
    localStream = null;
    localVideo.srcObject = null;
  }

  function resetRemote() {
    if (remoteStream) stopStream(remoteStream);
    remoteStream = null;
    remoteVideo.srcObject = null;
  }


  function reset(conn) {
    if (!conn.peerConn && !conn.signalingChannel) return;

    resetRemote();

    try {
      var pc = conn.peerConn;
      if (pc) {
        pc.onicecandidate = null;
        pc.oniceconnectionstatechange = null;
        pc.ontrack = null;
        pc.close();
      }
    } catch (e) {
      console.error(e);
    }

    try {
      conn.signalingChannel.close();
    } catch (e) {
      console.error(e);
    }

    conn.peerConn = null;
    conn.signalingChannel = null;
  }

  function start(relayOnly) {
    console.log('start');
    useRelayOnly = relayOnly == null ? useRelayOnly : relayOnly;
    if (connection)
      reset(connection);

    var conn = {};
    var chan = new SignalingChannel({
      chat: chat,
      url: url,
    });
    conn.signalingChannel = chan;
    chan.onGetIceServers(function (iceServers) {
      var pc = new RTCPeerConnection({
        iceServers: iceServers,
        iceTransportPolicy: useRelayOnly ? 'relay' : 'all',
      });
      conn.peerConn = pc;

      // send any ice candidates to the other peer
      pc.onicecandidate = function (evt) {
        if (evt.candidate == null) return;
        chan.send({ "candidate": evt.candidate });
      };

      pc.oniceconnectionstatechange = function (evt) {
        console.log(pc.iceConnectionState);
        if (pc.iceConnectionState === 'closed') {
          reset(conn);
        } else if (pc.iceConnectionState === 'failed') {
          restart(conn);
        }
      }

      pc.ontrack = function (evt) {
        console.log('add remote stream');
        console.log(evt);
        if (remoteStream && remoteStream === evt.streams[0]) {
          console.log('same stream');
          return;
        }

        remoteStream = evt.streams[0];
        remoteVideo.autoplay = true;
        remoteVideo.srcObject = remoteStream;
      };

      if (localStream) pc.addStream(localStream);

      chan.onMessage(handleSignal.bind(null, conn));
      // only one peer will fire room ready event (the first one enter room)
      chan.onRoomReady(sendOffer.bind(null, conn));
    });
    connection = conn;
  }

  function onevent(f) {
    if (handlers.indexOf(f) === -1)
      handlers.push(f);
  }

  function fireEvent(message, obj) {
    handlers.forEach(function (fn) {
      fn(message, obj)
    });
  };

  function stopStream(stream) {
    stream.getTracks().forEach(function (t) {
      t.stop();
    });
  }

  function stop() {
    restartCount = 0;
    resetLocal();
    reset(connection);
  }

  this.requirePermission = requirePermission;
  this.getPeerConnectionStats = getStats;
  this.start = start;
  this.onevent = onevent;
  this.stop = stop;

  this.getLocalVideo = function () {
    return localVideo;
  };

  this.getRemoteVideo = function () {
    return remoteVideo;
  };
}

// export default P2PChat