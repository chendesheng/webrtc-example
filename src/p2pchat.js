function P2PChat(chatGuid, localVideo, remoteVideo) {
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
    pc.createOffer()
      .then(function (offer) {
        return pc.setLocalDescription(offer);
      })
      .then(function () {
        signalingChannel.send({ offer: pc.localDescription });
      });
  }

  this.requirePermission = function (isVideo) {
    if (signalingChannel == null) {
      signalingChannel = new SignalingChannel(chatGuid);
    }

    return navigator.mediaDevices
      .getUserMedia({ "audio": true, "video": isVideo ? { facingMode: "user" } : false })
      .then(function (stream) {
        localStream = stream;

        console.log('add local stream');
        localVideo.autoplay = true;
        localVideo.muted = true;
        localVideo.srcObject = localStream;
        if (pc) {
          pc.addStream(localStream);
          sendOffer();
        }
        return Promise.resolve();
      })
  };

  function getStatus() {
    if (pc == null)
      return 'new';
    else if (pc.iceConnectionState === 'completed' ||
      pc.iceConnectionState === 'connected')
      return 'started';
    else return 'starting';
  }

  this.getStatus = getStatus;

  this.start = function (isVideo, isCaller, relayOnly) {
    return new Promise(function (resolve, reject) {
      if (signalingChannel == null) {
        signalingChannel = new SignalingChannel(chatGuid);
      }
      signalingChannel.onmessage(handleSignal);
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
          if (pc.iceConnectionState === 'closed') {
            if (localStream) stopStream(localStream);
            if (remoteStream) stopStream(remoteStream);
            localVideo.srcObject = null;
            remoteVideo.srcObject = null;
            signalingChannel.close();
            signalingChannel = null;

            pc = null;
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
          resolve();
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
    if (pc == null) return;
    pc.close();

    if (signalingChannel == null) return;
    signalingChannel.send({ close: 1 });
  };
}