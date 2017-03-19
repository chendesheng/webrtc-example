function SignalingChannel(chat) {
  var iceServers;
  var opponentReady = false;
  var peersCount = 1;
  var roomReadyHandler = null;
  var messageHandler;
  var pingTimer;
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
      if (resp.count > peersCount && resp.count > 1) {
        send({ hello: true });
      }
      peersCount = resp.count;
      if (peersCount < 2) {
        opponentReady = false;
      }
    } else if (resp.helloback) {
      opponentReady = true;
    } else if (resp.hello) {
      opponentReady = true;
      send({ helloback: true });
    } else if (resp.d && resp.d.iceServers) {
      iceServers = resp.d.iceServers;
    } else {
      if (messageHandler)
        messageHandler(resp);
      return;
    }

    checkRoomReady();
  };

  ws.onclose = function () {
    opponentReady = false;
    iceServers = null;
  }

  function checkRoomReady() {
    if (opponentReady && iceServers && roomReadyHandler) {
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
}
