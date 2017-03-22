// import 'webrtc-adapter';
/* eslint-disable */

function SignalingChannel(args) {
  var url = args.url;
  var chat = args.chat;
  var iceServers;
  var opponentReady = false;
  var peersCount = 0;
  var pingTimer;
  var messageHandler;
  var roomReadyHandler;
  var getIceServersHandler;
  var oncloseHandler;
  var ws = new WebSocket('wss://' + url + '?chatId=' + chat);
  ws.onopen = function () {
    console.log('open');
    pingTimer = setInterval(function () {
      ws.send('ping');
    }, 20 * 1000);
  };

  ws.onmessage = function (evt) {
    var resp = JSON.parse(evt.data);
    if (resp.count != null) {
      if (peersCount === 0 && resp.count > 1) {
        ensureGetIceServers();
        console.log('send hello');
        // say hello when some one alreay in room
        send({ hello: 1 });
      }
      peersCount = resp.count;
      if (peersCount < 2) {
        opponentReady = false;
      }
    } else if (resp.hello) {
      console.log('receive hello');
      opponentReady = true;
      ensureGetIceServers();
      checkRoomReady();
    } else if (resp.d && resp.d.iceServers) {
      if (iceServers == null) {
        iceServers = resp.d.iceServers;
        console.log('get ice servers:', iceServers);
        iceServers.push({ urls: 'stun:stun.l.google.com:19302' });
        if (getIceServersHandler) getIceServersHandler(iceServers);
      }
    } else {
      if (messageHandler)
        messageHandler(resp);
    }
  };

  ws.onclose = function () {
    opponentReady = false;
    iceServers = null;
    peersCount = 0;
    clearInterval(pingTimer);
    getIceServersHandler = null;
    messageHandler = null;
    roomReadyHandler = null;

    var fn = oncloseHandler;
    oncloseHandler = null;
    if (fn) fn();
  }

  this.onclose = function (fn) {
    oncloseHandler = fn;
  }

  function ensureGetIceServers() {
    if (iceServers == null) {
      iceServers = [{ urls: 'stun:stun.l.google.com:19302' }]
      if (getIceServersHandler) getIceServersHandler(iceServers);
    }
  }

  function checkRoomReady() {
    if (opponentReady && roomReadyHandler) {
      roomReadyHandler();
    }
  }

  function send(data) {
    ws.send(JSON.stringify(data));
  }

  this.send = send;

  this.close = function () {
    ws.close();
  };

  this.onRoomReady = function (fn) {
    roomReadyHandler = fn;
    checkRoomReady();
  };

  this.onmessage = function (fn) {
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
  var pc;
  var signalingChannel;
  var localStream;
  var remoteStream;

  function handleSignal(signal) {
    console.log(signal);

    if (signal.offer) {
      pc.setRemoteDescription(new RTCSessionDescription(signal.offer))
        .then(function () {
          return pc.createAnswer()
        })
        .then(function (answer) {
          return pc.setLocalDescription(answer)
        })
        .then(function () {
          signalingChannel.send({ answer: pc.localDescription });
          return Promise.resolve();
        })
        .catch(function (err) {
          fireEvent('error', err);
        });
    }

    if (signal.answer) {
      pc.setRemoteDescription(new RTCSessionDescription(signal.answer))
        .then(function () {
          console.log('set answer success');
          return Promise.resolve();
        })
        .catch(function (err) {
          fireEvent('error', err);
        });
    }

    if (signal.candidate) {
      pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
    }

    if (signal.close) {
      pc.close();
    }
  }

  function gotDescription(desc) {
    pc.setLocalDescription(desc);
    signalingChannel.send({ offer: desc });
  }

  function sendOffer() {
    console.log('sendOffer');
    pc.createOffer()
      .then(function (offer) {
        console.log('create offer:', offer);
        return pc.setLocalDescription(offer);
      })
      .then(function () {
        console.log('send offer:', pc.localDescription);
        signalingChannel.send({ offer: pc.localDescription });
      });
  }

  this.requirePermission = function (isVideo) {
    return navigator.mediaDevices
      .getUserMedia({ "audio": true, "video": isVideo ? { facingMode: "user" } : false })
      .then(function (stream) {
        localStream = stream;

        console.log('add local stream');
        localVideo.autoplay = true;
        localVideo.muted = true;
        localVideo.srcObject = localStream;
        return Promise.resolve();
      });
  };

  function getStats() {
    // var findSelected = o =>
    //   Object.keys(o).find(i => o[i].type == "candidatepair" && o[i].selected);
    if (pc) {
      pc.getStats().then(console.log);
      return pc.getStats();
    } else {
      return Promise.resolve();
    }
  }

  this.getPeerConnectionStats = getStats;

  this.start = function (relayOnly) {
    return new Promise(function (resolve, reject) {
      var onsuccess = resolve;

      signalingChannel = new SignalingChannel({
        chat: chat,
        url: url,
      });
      signalingChannel.onmessage(handleSignal);
      signalingChannel.onclose(function () {
        if (onsuccess === resolve) {
          onsuccess = null;
          reject('cancled');
        }

        if (localStream) stopStream(localStream);
        if (remoteStream) stopStream(remoteStream);
        localVideo.srcObject = null;
        remoteVideo.srcObject = null;

        signalingChannel = null;
      })
      signalingChannel.onGetIceServers(function (iceServers) {
        pc = new RTCPeerConnection({
          iceServers: iceServers,
          iceTransportPolicy: relayOnly ? 'relay' : 'all',
        });

        // send any ice candidates to the other peer
        pc.onicecandidate = function (evt) {
          if (evt.candidate == null) return;

          signalingChannel.send({ "candidate": evt.candidate });
        };
        pc.oniceconnectionstatechange = function (evt) {
          if (pc.iceConnectionState === 'connected') {
            if (onsuccess === resolve) {
              onsuccess()
              onsuccess = null;
            }
          } else if (pc.iceConnectionState === 'closed') {
            if (onsuccess === resolve) {
              onsuccess = null;
              reject('cancled');
            }

            if (signalingChannel) {
              signalingChannel.close();
            }

            pc = null;

            fireEvent('close');
          } else {
            console.log(pc.iceConnectionState);
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
        // only one peer will fire room ready event (the first one enter room)
        signalingChannel.onRoomReady(function () {
          sendOffer();
        });
      });
    });
  }

  this.onevent = function onevent(f) {
    if (handlers.indexOf(f) === -1)
      handlers.push(f);
  };

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

  // stop video chat
  this.stop = function () {
    if (signalingChannel != null) {
      try { signalingChannel.send({ close: 1 }); }
      catch (err) { }
    }
    if (signalingChannel != null) signalingChannel.close();
    if (pc != null) pc.close();
  };

  this.getLocalVideo = function () {
    return localVideo;
  };

  this.getRemoteVideo = function () {
    return remoteVideo;
  };
}

function ifSupportWebrtc() {
  var PC = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;
  var edge = navigator.userAgent.indexOf(' Edge') > 0;
  return !!PC && !!getUserMedia && !edge;
}

// export default P2PChat