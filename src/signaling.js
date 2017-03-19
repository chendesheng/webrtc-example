function SignalingChannel(chat) {
  var iceServers;
  var opponentReady = false;
  var peersCount = 0;
  var pingTimer;
  var messageHandler;
  var roomReadyHandler;
  var getIceServersHandler;
  var oncloseHandler;
  var ws = new WebSocket('wss://hosted.comm100.com/webrtcSignalingService/signaling.ashx?chatId=' + chat);
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
