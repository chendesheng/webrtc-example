function P2PChat(chatGuid, isCaller, localVideo, remoteVideo) {
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
    return new Promise(function (onresolve, onreject) {
      getUserMedia({ "audio": true, "video": isVideo },
        function (stream) {
          localStream = stream;

          console.log('add local stream');
          localVideo.autoplay = true;
          localVideo.muted = true;
          attachMediaStream(localVideo, localStream);

          onresolve();
        }, function (err) {
          console.log('error', err);
          onreject(err);
        });
    });
  };

  function getStatus() {
    if (pc == null)
      return 'new';
    else if (pc.iceConnectionState === 'completed' ||
      pc.iceConnectionState === 'connected')
      return 'started';
    else if (pc.iceConnectionState === 'new' ||
      pc.iceConnectionState === 'checking')
      return 'starting';
  }

  this.getStatus = getStatus;

  this.start = function (isVideo, isCaller, relayOnly) {
    if (getStatus() !== 'new') return;

    return new Promise(function (resolve, reject) {
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
        };

        pc.oniceconnectionstatechange = function (evt) {
          if (pc.iceConnectionState === 'closed') {
            if (localStream) stopStream(localStream);
            if (remoteStream) stopStream(remoteStream);
            detachMediaStream(localVideo);
            detachMediaStream(remoteVideo);
            signalingChannel.close();
            signalingChannel = null;

            pc = null;
          } else {
            console.log(pc.iceConnectionState);
          }
        }

        if (isCaller) {
          pc.onnegotiationneeded = function () {
            console.log('onnegotiationneeded');
            sendOffer();
          };
        }

        // once remote stream arrives, show it in the remote video element
        pc.onaddstream = function (evt) {
          console.log('add remote stream');
          remoteStream = evt.stream;
          remoteVideo.autoplay = true;
          attachMediaStream(remoteVideo, remoteStream);
          resolve();
        };

        if (localStream) pc.addStream(localStream);
      });
    })
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
    signalingChannel.send({ close: true });
  };
}