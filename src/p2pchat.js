function P2PChat(args) {
  var chatGuid = args.chatGuid;
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
        chat: chatGuid,
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
}