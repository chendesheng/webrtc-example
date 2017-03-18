function P2PChat(chatGuid, isCaller, localVideo, remoteVideo) {
  var handlers = [];
  var pc;
  var signalingChannel;
  var localStream;
  var remoteStream;

  function handleSignal(signal) {
    console.log(signal);

    if (signal.offer) {
      pc.setRemoteDescription(new RTCSessionDescription(signal.offer), function () {
        pc.createAnswer(function (answer) {
          pc.setLocalDescription(answer,
            function () {
              signalingChannel.send({ answer: pc.localDescription });
            },
            function (err) {
              fireEvent('error', err);
            });
        }, function () {
          fireEvent('error', err);
        });
      },
        function (err) {
          fireEvent('error', err);
        });
    }

    if (signal.answer) {
      pc.setRemoteDescription(new RTCSessionDescription(signal.answer),
        function () {
          console.log('set answer success');
        }, function () {
          fireEvent('error', err);
        });
    }

    if (signal.candidate) {
      pc.addIceCandidate(new RTCIceCandidate(signal.candidate));
    }

    if (signal.stop) {
      stop();
    }
  }

  function gotDescription(desc) {
    pc.setLocalDescription(desc);
    signalingChannel.send({ offer: desc });
  }

  function sendOffer(ifVideo) {
    pc.createOffer({ video: ifVideo, audio: true })
      .then(function (offer) {
        return pc.setLocalDescription(offer);
      })
      .then(function () {
        signalingChannel.send({ offer: pc.localDescription });
      });
  }

  this.requirePermission = function (ifVideo, onsuccess, onfailed) {
    getUserMedia({ "audio": true, "video": ifVideo },
      function (stream) {
        localStream = stream;

        console.log('add local stream');
        localVideo.autoplay = true;
        localVideo.muted = true;
        attachMediaStream(localVideo, localStream);

        if (onsuccess) onsuccess();
      }, function (err) {
        console.log('error', error);
        if (onfailed) onfailed();
      });
  };

  function createPeerConnection(iceServers, onconnected) {
    var pc = new RTCPeerConnection(iceServers);

    // send any ice candidates to the other peer
    pc.onicecandidate = function (evt) {
      if (evt.candidate == null) return;

      signalingChannel.send({ "candidate": evt.candidate })
    };

    // once remote stream arrives, show it in the remote video element
    pc.onaddstream = function (evt) {
      console.log('add remote stream');
      remoteStream = evt.stream;
      attachMediaStream(remoteVideo, remoteStream);
      if (onconnected) onconnected();
    };

    console.log('add local stream');
    attachMediaStream(localVideo, localStream);
    pc.addStream(localStream);

    return pc;
  }

  var status = 'notstart';

  this.getStatus = function () {
    return status;
  };

  this.start = function (ifVideo, isCaller, relayOnly) {
    if (status != 'notstart') return Promise.resolve();
    status = 'starting';

    return new Promise(function (resolve, reject) {
      var timeout = setTimeout(function () {
        reject();
        status = 'notstart';
      }, 2 * 60 * 1000);
      signalingChannel = new SignalingChannel(chatGuid);
      signalingChannel.onmessage(handleSignal);
      signalingChannel.onclosed(function () {
        console.log('onclosed');
        fireEvent('closed');
      });
      signalingChannel.onPeersReady(function (iceServers) {
        // iceServers.iceTransportPolicy = 'relay';
        pc = new RTCPeerConnection({
          iceServers: iceServers,
          iceTransportPolicy: relayOnly ? 'relay' : 'all',
        });

        // send any ice candidates to the other peer
        pc.onicecandidate = function (evt) {
          if (evt.candidate == null) return;

          signalingChannel.send({ "candidate": evt.candidate });
          // var components = event.candidate.candidate.split(" ");
          // if (components[7] == "relay") {
          //     var candidateMsg = {
          //         type: 'candidate',
          //         label: event.candidate.sdpMLineIndex,
          //         id: event.candidate.sdpMid,
          //         candidate: event.candidate.candidate
          //     };
          //     signalingChannel.send({ "candidate": candidateMsg });
          // } else {
          //     console.log("Ignore local host.");
          // }
        };

        // once remote stream arrives, show it in the remote video element
        pc.onaddstream = function (evt) {
          console.log('add remote stream');
          remoteStream = evt.stream;
          remoteVideo.autoplay = true;
          attachMediaStream(remoteVideo, remoteStream);

          status = 'started';
          resolve();
        };

        pc.addStream(localStream);
        if (isCaller) sendOffer(ifVideo);
      });
    })
  }

  this.onevent = function onevent(f) {
    if (handlers.indexOf(f) === -1)
      handlers.push(f);
  };

  function fireEvent(message, obj) {
    handlers.forEach(f => f(message, obj));
  };

  function stopStream(stream) {
    stream.getTracks().forEach(function (t) {
      t.stop();
    });
  }

  function stop() {
    status = 'notstart';

    pc.close();
    pc = null;
    if (localStream) stopStream(localStream);
    if (remoteStream) stopStream(remoteStream);
    detachMediaStream(localVideo);
    detachMediaStream(remoteVideo);
    signalingChannel.close();
    signalingChannel = null;
  };

  // stop video chat
  this.stop = function () {
    if (signalingChannel) {
      signalingChannel.send({ stop: true });
    }
    stop();
  };
}