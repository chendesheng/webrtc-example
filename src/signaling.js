function SignalingChannel(chat) {
  var iceServers;
  var peersCount = 0;
  var peersReadyHandler;
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
      peersCount = resp.count;
    } else if (resp.d && resp.d.iceServers) {
      iceServers = resp.d.iceServers;
    } else {
      if (messageHandler)
        messageHandler(resp);
      return;
    }

    if (peersCount > 1 && iceServers != null) {
      if (peersReadyHandler)
        peersReadyHandler(iceServers);
    }
  };
  ws.onclose = function () {
    peersCount = 0;
    iceServers = null;
  }

  this.send = function send(data) {
    ws.send(JSON.stringify(data));
  };

  this.close = function () {
    ws.close();
  };

  this.peersReady = function () {
    return peersCount > 1;
  };

  this.onPeersReady = function (fn) {
    peersReadyHandler = fn;

    if (iceServers != null && peersCount > 1 && fn) {
      fn(iceServers);
    }
  };

  this.onmessage = function (fn) {
    messageHandler = fn;
  };

  this.onclosed = function (fn) {
    ws.onclose = function () {
      if (pingTimer) clearInterval(pingTimer);
    };
  };
}
