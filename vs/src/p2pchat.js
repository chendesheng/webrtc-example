// import 'webrtc-adapter';
/* eslint-disable */

function SignalingChannel(args) {
  var url = args.url;
  var chat = args.chat;
  var iceServers;
  var peersCount = 0;
  var pingTimer;
  var messageHandler;
  var errorHandler;
  var remoteStarted = false;
  var remoteStartHandler;
  var getIceServersHandler;
  var schema = url.indexOf('localhost') === -1 ? 'wss://' : 'ws://';
  var ws = new WebSocket(schema + url + '?chatId=' + chat);
  var pingTimes = 0;
  ws.onopen = function () {
    console.log('open');
    pingTimer = setInterval(function () {
      pingTimes++;
      ws.send('ping');
      if (pingTimes >= 100) {
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
    console.log('signaling connection close');
    reset();
  };

  ws.onerror = function (err) {
    reset();
    if (errorHandler) errorHandler();
  };

  var DEFAULT_STUN_SERVER = { urls: 'stun:stun.l.google.com:19302' };

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

  this.onError = function (fn) {
    errorHandler = fn;
  };
}

function DeviceMonitor() {
  var pollTimer;
  var currentDevices;
  var deviceChangeHandler;

  function onDeviceChange(fn) {
    deviceChangeHandler = fn;

    if (deviceChangeHandler) {
      // firefox只有在getUserMedia允许后才会触发ondevicechange
      // chrome的ondevicechange可能会同时有多次
      // 其他浏览器未知
      getDevices().then(function (devices) {
        currentDevices = devices;
        resetPollTimer();
        pollTimer = setInterval(function () {
          getDevices().then(checkDevices);
        }, 1000);
      });
    } else {
      resetPollTimer();
    }
  }

  function resetPollTimer() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  function hasDevice(devices, kind) {
    for (var i = 0; i < devices.length; i++) {
      var d = devices[i];
      if (d.kind == kind) return true;
    }
    return false;
  }

  function checkDevices(devices) {
    try {
      if (!currentDevices) currentDevices = devices;

      if (devices.audio == currentDevices.audio && devices.video == currentDevices.video) return;
      currentDevices = devices;
      if (deviceChangeHandler) deviceChangeHandler(devices);
    } catch (err) {
      console.error(err);
    }
  }

  function getDevices() {
    return navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        return Promise.resolve({
          audio: hasDevice(devices, 'audioinput'),
          video: hasDevice(devices, 'videoinput')
        });
      });
  }

  function reset() {
    deviceChangeHandler = null;
    navigator.mediaDevices.ondevicechange = null;
    resetPollTimer();
  }

  this.onDeviceChange = onDeviceChange;
  this.getDevices = function () {
    return getDevices().then(function (devices) {
      checkDevices(devices);
      return Promise.resolve(devices);
    });
  };
  this.reset = reset;
}

function DeviceRequester(requestDevices) {
  // 已允许的设备
  var allowedDevices = {
    audio: false,
    video: false,
  };

  var monitor = new DeviceMonitor();

  function onGetDevice(fn) {
    if (fn) {
      monitor.onDeviceChange(function (currentDevices) {
        // 去掉设备后退成false，这样再插上会重连
        if (allowedDevices.audio && !currentDevices.audio) {
          allowedDevices.audio = false;
        }
        if (allowedDevices.video && !currentDevices.video) {
          allowedDevices.video = false;
        }
        console.log('allowedDevices: ', allowedDevices);
        console.log('currentDevices: ', currentDevices);
        // 已经满足设备要求了
        if (allowedDevices.audio == requestDevices.audio
          && allowedDevices.video == requestDevices.video) return;

        // 只有设备比原来变多了才会再请求
        if ((currentDevices.audio && !allowedDevices.audio)
          || (currentDevices.video && !allowedDevices.video)) {
          dorequest(currentDevices).then(fn);
        }
      });
    } else {
      monitor.onDeviceChange(null);
    }
  }

  var localStream;
  function getUserMedia(devices) {
    stopStream(localStream);
    // 总是请求前置摄像头
    return navigator.mediaDevices.getUserMedia({
      audio: devices.audio,
      video: devices.video ? { facingMode: 'user' } : false,
    }).then(function (stream) {
      localStream = stream;
      return Promise.resolve(stream);
    });
  }

  function dorequest(currentDevices) {
    // 只请求存在的设备
    var devices = {
      audio: requestDevices.audio && currentDevices.audio,
      video: requestDevices.video && currentDevices.video
    };

    // 没有请求的设备视为成功
    if (!devices.audio && !devices.video) {
      allowedDevices = devices;
      return Promise.resolve();
    }

    // 允许后更新allowedDevices，拒绝了allowedDevices不变
    return getUserMedia(devices).then(function (stream) {
      allowedDevices = devices;
      console.log('get stream:', stream);
      return Promise.resolve(stream);
    });
  }

  function stopStream(stream) {
    if (stream) {
      stream.getTracks().forEach(function (t) {
        t.stop();
      });
    }
  }

  function reset() {
    allowedDevices = { audio: false, video: false };
    stopStream(localStream);
    localStream = null;
    monitor.reset();
  }

  this.ifRequestVideoDevice = function () {
    return requestDevices.video;
  };

  this.request = function () {
    return monitor.getDevices().then(dorequest);
  };

  this.onGetDevice = onGetDevice;

  this.getStream = function () {
    return localStream;
  };

  this.getDevices = function () {
    return monitor.getDevices();
  };

  this.reset = reset;
}

function WakeLock() {
  /**
   * code came from NoSleep.js  v0.5.0 - git.io/vfn01
   * Rich Tibbett
   * MIT license
   **/
  var android = /Android/ig.test(navigator.userAgent);
  if (android) {
    var media = {
      WebM: "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=",
      MP4: "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAABsW1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAA+gAAAAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVxtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEcc3RibAAAALhzdHNkAAAAAAAAAAEAAACobXA0dgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAFJlc2RzAAAAAANEAAEABDwgEQAAAAADDUAAAAAABS0AAAGwAQAAAbWJEwAAAQAAAAEgAMSNiB9FAEQBFGMAAAGyTGF2YzUyLjg3LjQGAQIAAAAYc3R0cwAAAAAAAAABAAAAAQAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAAEwAAAAEAAAAUc3RjbwAAAAAAAAABAAAALAAAAGB1ZHRhAAAAWG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAK2lsc3QAAAAjqXRvbwAAABtkYXRhAAAAAQAAAABMYXZmNTIuNzguMw=="
    };
    var lockVideo = initLockVideo();
    var lockVideoPlayTimer;

    function addSourceToVideo(video, type, dataURI) {
      var source = document.createElement('source');
      source.src = dataURI;
      source.type = "video/" + type;
      video.appendChild(source);
    }

    function initLockVideo() {
      var video = document.createElement('Video');
      video.setAttribute('loop', '');
      addSourceToVideo(video, 'webm', media.WebM);
      addSourceToVideo(video, 'mp4', media.MP4);
      return video;
    }

    this.enable = function () {
      try {
        lockVideo.play();
        if (lockVideoPlayTimer) clearInterval(lockVideoPlayTimer);
        lockVideoPlayTimer = setInterval(function () {
          lockVideo.play();
        }, 3000);
      } catch (err) {
        console.error(err);
      }
    };

    this.disable = function () {
      try {
        lockVideo.pause();
        if (lockVideoPlayTimer) clearInterval(lockVideoPlayTimer);
      } catch (err) {
        console.error(err);
      }
    };
  } else {
    this.enable = function () { };
    this.disable = function () { };
  }
}

function P2PChat(args) {
  var chat = args.chat;
  var localVideo = args.localVideo;
  var remoteVideo = args.remoteVideo;
  var eventHandler;
  var connection = null;
  var remoteStream;
  var useRelayOnly = false;
  var wakeLock = new WakeLock();
  var signalingServiceUrl;

  function handleSignal(conn, signal) {
    // console.log(signal);
    var pc = conn.peerConn;
    var chan = conn.signalingChannel;

    if (signal.offer) {
      // console.log('receive offer:', signal.offer);
      // console.log('pc.signalingState:', pc.signalingState)
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
          restart(conn, true, true);
        });
    }

    if (signal.answer) {
      // console.log('receive answer:', signal.answer);
      // console.log('pc.signalingState:', pc.signalingState)
      pc.setRemoteDescription(new RTCSessionDescription(signal.answer))
        .then(function () {
          console.log('set answer success');
          return Promise.resolve();
        })
        .catch(function (err) {
          console.log(err);
          restart(conn, true, true);
        });
    }

    if (signal.candidate) {
      // console.log('receive candidate:', signal.candidate);
      // console.log('pc.iceGatheringState', pc.iceGatheringState);
      pc.addIceCandidate(new RTCIceCandidate(signal.candidate))
        .catch(function () {
          restart(conn, true, true);
        });
    }

    if (signal.restart) {
      console.log('receive restart');
      restart(conn, false, false);
    }
  }

  var restartCount = 0;
  function restart(conn, signalRestart, checkRestartCount) {
    if (checkRestartCount) restartCount++;

    console.log('restart:', restartCount);

    // catch到exception时checkRestartCount为true
    // checkRestartCount为true的时候控制restart次数
    // 避免由于异常导致不停的restart
    if (!checkRestartCount || restartCount <= 8) {
      if (signalRestart) {
        conn.signalingChannel.send({ restart: 1 });
      }
      reset(conn);
      start();
    } else {
      resetLocal();
      reset(conn);
      fireEvent('error', 'P2PChat Error: restart more than 5 times');
    }
  }

  function sendOffer(conn) {
    var pc = conn.peerConn;
    var chan = conn.signalingChannel;

    console.log('sendOffer');
    pc.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: deviceRequester.ifRequestVideoDevice(),
    })
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
        restart(conn, true, true);
      });
  }

  function initLocalVideo(stream) {
    console.log('add local stream: ', stream);
    localVideo.autoplay = true;
    localVideo.muted = true;
    localVideo.srcObject = stream;
  }

  var deviceRequester;
  function requirePermission(isVideo) {
    resetLocal();
    if (!isVideo) {
      wakeLock = new WakeLock();
      wakeLock.enable();
    }

    deviceRequester = new DeviceRequester({
      audio: true,
      video: isVideo,
    });
    return deviceRequester.request()
      .then(function (stream) {
        initLocalVideo(stream);
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

  function resetVideoElement(videoElement) {
    try {
      videoElement.srcObject = null;
    } catch (e) {
      console.log(e);
    }
  }

  function resetLocal() {
    if (deviceRequester) deviceRequester.reset();
    resetVideoElement(localVideo);
  }

  function resetRemote() {
    if (remoteStream) stopStream(remoteStream);
    remoteStream = null;
    resetVideoElement(remoteVideo);
  }

  function reset(conn) {
    if (deviceRequester) deviceRequester.onGetDevice(null);

    if (!conn) return;
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
    connection = null;
  }

  function start() {
    fireEvent('start');
    console.log('start');
    if (connection)
      reset(connection);

    var conn = {};
    var chan = new SignalingChannel({
      chat: chat,
      url: signalingServiceUrl,
    });
    conn.signalingChannel = chan;
    chan.onError(function () {
      if (conn.peerConn == null
        || conn.peerConn.iceConnectionState === 'closed'
        || conn.peerConn.iceConnectionState === 'failed') {
        setTimeout(function () {
          restart(conn, false, true);
        }, 3000);
      }
    });
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
          restart(conn, true, true);
        }
      }

      var localStream = deviceRequester.getStream();
      deviceRequester.onGetDevice(function (stream) {
        initLocalVideo(stream);
        restart(conn, true, false);
      });
      if (localStream) pc.addStream(localStream);

      pc.onaddstream = function (evt) {
        console.log('add remote stream');
        remoteStream = evt.stream;
        remoteVideo.autoplay = true;
        remoteVideo.srcObject = remoteStream;

        fireEvent('remoteStreamReceived', remoteStream);
      };

      chan.onMessage(handleSignal.bind(null, conn));
      // only one peer will fire start event (the first one enter room)
      chan.onRemoteStart(function () {
        //restart if already started
        if (remoteStream) {
          restart(conn, true, false);
          return;
        }

        sendOffer(conn);
      });
    });
    connection = conn;
  }

  function onevent(f) {
    eventHandler = f;
  }

  function fireEvent(message, obj) {
    if (eventHandler) eventHandler(message, obj);
  };

  function stopStream(stream) {
    stream.getTracks().forEach(function (t) {
      t.stop();
    });
  }

  function stop() {
    if (wakeLock) wakeLock.disable();

    restartCount = 0;
    resetLocal();
    reset(connection);
  }

  this.requirePermission = requirePermission;
  this.getPeerConnectionStats = getStats;
  this.start = function (url, relayOnly) {
    signalingServiceUrl = url;
    useRelayOnly = relayOnly;
    start();
  };
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