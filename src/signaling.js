function SignalingChannel(chat) {
  var iceServers;
  var opponentReady = false;
  var peersCount = 0;
  var roomReadyHandler = null;
  var messageHandler;
  var pingTimer;
  var getIceServersHandler;
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
        // say hello when some one alreay in room
        send({ hello: 1 });
      }
      peersCount = resp.count;
      if (peersCount < 2) {
        opponentReady = false;
      }
    } else if (resp.hello) {
      opponentReady = true;
      if (roomReadyHandler) roomReadyHandler();
    } else if (resp.d && resp.d.iceServers) {
      if (getIceServersHandler) getIceServersHandler(resp.d.iceServers);
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
  }

  function checkRoomReady() {
    if (opponentReady && roomReadyHandler) {
      roomReadyHandler(iceServers);
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
