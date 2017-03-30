
function soundManager(btn_id, sound_url) {
    function setStatus(status) {
        replace_class($(btn_id), /sound-on|sound-off/, 'sound-' + status);
        cookie.set('sound', status);
    }
    function getStatus() {
        return cookie.get('sound') || 'on';
    }
    function isStatusOn() {
        return getStatus() == 'on';
    }

    setStatus(getStatus());  // 初始化界面
    this.toggle = function () {
        setStatus(isStatusOn() ? 'off' : 'on');
    };

    try {
        this.play = playByHTML5();
    } catch (e) {
        this.play = playByFlash();
    }

    function playByHTML5() {
        var player = new window.Audio(sound_url);
        return function () {
            if (isStatusOn()) {
                player.play();
            }
        };
    }

    function playByFlash() {
        window.soundPlayerIOError = function soundPlayerIOError(msg) {}
        function getFlashMovie(id) {
            return document[id] || (document.embeds && document.embeds[id]) || document.getElementById(id);
        }

        function safePlay(success) {
            if (isStatusOn()) {
                try {
                    getFlashMovie('div-sound-player').playMP3(sound_url, 'soundPlayerIOError');
                } catch (e) {
                    return; //wait until it's working
                }

                if (success) success();
            }
        }

        var loadFlash = false; // prevent load mutiple times
        return function () {
            if (!loadFlash) {
                loadFlash = true;

                swfobject.embedSWF('Sound/SoundPlayer2.swf', 'div-sound-player', '1', '1', '9.0.0');
                var timer = setInterval(function () {
                    safePlay(function () {
                        clearInterval(timer);
                    });
                }, 100);
                return;
            }
            safePlay();
        };
    }
}

