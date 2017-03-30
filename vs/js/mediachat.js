var MediaChat = {
    enumStatus: {
        notStart: 'notStart',
        audioIncoming: 'audioIncoming',
        audioRequesting: 'audioRequesting',
        audioChatting: 'audioChatting',
        videoIncoming: 'videoIncoming',
        videoRequesting: 'videoRequesting',
        videoChatting: 'videoChatting'
    },
    enumActionCode: {
        agent_video_chat_request: 320,
        agent_video_chat_cancel_request: 321,
        agent_video_chat_accept: 322,
        agent_video_chat_refuse: 323,
        agent_video_chat_stop: 324,
        visitor_video_chat_request: 325,
        visitor_video_chat_cancel_request: 326,
        visitor_video_chat_accept: 327,
        visitor_video_chat_refuse: 328,
        visitor_video_chat_stop: 329,
        server_video_chat_no_answer: 330,
        server_video_chat_end: 331,
        agent_audio_chat_request: 332,
        agent_audio_chat_cancel_request: 333,
        agent_audio_chat_accept: 334,
        agent_audio_chat_refuse: 335,
        agent_audio_chat_stop: 336,
        visitor_audio_chat_request: 337,
        visitor_audio_chat_cancel_request: 338,
        visitor_audio_chat_accept: 339,
        visitor_audio_chat_refuse: 340,
        visitor_audio_chat_stop: 341,
        server_audio_chat_no_answer: 342,
        server_audio_chat_end: 343,
        system_if_supportWebrtc: 344
    },
    agentName: '',
    agentAvatarSrc: '',
    p2pChat: null,
    ifVideoChat: false,
    embedded_window_handler: {},
    chat_window_handler: {},
    currentStatus: 'notStart',
    window: null,
    isPopupWindow: false,
    textAudioCalling: 'Audio Chat',
    textVideoCalling: 'Video Chat',
    actionTimer: 0,
    timer: 0,
    startTimer: function (dom) {
        var elapsed, seconds, minutes, hours, days;
        elapsed = seconds = minutes = hours = days = 0;
        this.timer = setInterval(function () {
            days = parseInt(elapsed / 86400, 10);
            hours = parseInt((elapsed % 86400) / 3600, 10);
            minutes = parseInt(((elapsed % 86400) % 3600) / 60, 10);
            seconds = parseInt(((elapsed % 86400) % 3600) % 60, 10);
            displayText = (days > 0 ? days + '.' : '')
                            + (hours > 10 ? hours + ':' :
                            (hours < 10 && hours > 0 ? '0' + hours + ':' : (hours === 0 && days > 0 ? '00' : '')))
                            + (minutes < 10 ? '0' + minutes + ':' : minutes + ':')
                            + (seconds < 10 ? '0' + seconds : seconds);
            dom.innerHTML = displayText;
            elapsed++;
        }, 1000);
    },
    stopTimer: function () {
        clearInterval(this.timer);
    },    

    ifLargeWindow: false,


    onRequestChatClick: function (e) {
        if (!MediaChat.chat_window_handler.is_chatting() &&
            MediaChat.has_class(e.target, 'disabled'))
            return;
        else {
            if (MediaChat.currentStatus === MediaChat.enumStatus.notStart) {
                MediaChat.ifVideoChat = e.target.id.indexOf('video') > 0;
                MediaChat.changeStatus(MediaChat.ifVideoChat ? 
                    MediaChat.enumStatus.videoRequesting : MediaChat.enumStatus.audioRequesting);
                MediaChat.requestChat();
            }
        }
    },

    setAgentInfo: function (name, src) {
        if (src) {
            this.agentAvatarSrc = src;
            document.getElementById('agentAvatar').src = this.agentAvatarSrc;
        }
        if (name) {
            this.agentName = name;
            var nameEles = document.getElementsByClassName('agentName');
            Array.prototype.forEach.call(nameEles, function (item) {
                item.innerHTML = MediaChat.agentName;
            });
        }
    },

    createUI: function () {
        if (this.window.innerHTML === '') {
            this.window.innerHTML = '<div class="requesting"><div class="agentAvatar"><img id="agentAvatar" src="" /></div><div class="agentName"></div>'
                                  + '<div class="waiting">'
                                  + '<div class="textAudio"><span class="iconfont icon-audio"></span><div class="waitingText">' + this.textAudioCalling + '</div></div>'
                                  + '<div class="textVideo"><span class="iconfont icon-video"></span><div class="waitingText">' + this.textVideoCalling + '</div></div>'
                                  + '<div class="waitingAni"><span>.</span><span>.</span><span>.</span></div></div>'
                                  + '<div class="buttons">'
                                  + '<div class="button accept" onclick="MediaChat.accept();"><span class="iconfont icon-accept"></span></div>'
                                  + '<div class="button hangup" onclick="MediaChat.hangup();"><span class="iconfont icon-hangup"></span></div>'
                                  + '</div></div>';
            this.window.innerHTML += '<div class="chatting"><div class="chattingAgent"><div class="agentName"></div>'
                                  + '<div class="chattingDuration"></div></div>'
                                  + '<div class="buttons"><div class="button hangup" onclick="MediaChat.hangup();"><span class="iconfont icon-hangup"></span></div></div></div>';
        }
    },

    setWindowSize: function(ifLarge){
        if(!this.isPopupWindow) {
            if (ifLarge && !this.ifLargeWindow) {
                this.embedded_window_handler.resize(500, 0);
                this.ifLargeWindow = true;
            }
            else if (!ifLarge && this.ifLargeWindow) {
                this.embedded_window_handler.resize(-500, 0);
                this.ifLargeWindow = false;
            }
        }
        else {
            //todo
        }
    },

    disableIconButtons: function(){
        this.add_class(document.getElementById('btn-audio-chat'), 'disabled');
        this.add_class(document.getElementById('btn-video-chat'), 'disabled');
    },
    enableIconButtons: function(){
        this.remove_class(document.getElementById('btn-audio-chat'), 'disabled');
        this.remove_class(document.getElementById('btn-video-chat'), 'disabled');
    },

    ifSupportWebrtc: function(){
        return true; // todo
    },

    changeStatus: function (status, ifVideo) {
        this.ifVideoChat = ifVideo;
        this.currentStatus = status;
    },

    requestChat: function () {
        var actionCode = MediaChat.ifVideoChat ?
            MediaChat.enumActionCode.visitor_video_chat_request : MediaChat.enumActionCode.visitor_audio_chat_request;
        MediaChat.chat_window_handler.add_message(actionCode, '');
    },

    accept: function (){
        var actionCode = MediaChat.ifVideoChat ? MediaChat.enumActionCode.visitor_video_chat_accept : MediaChat.enumActionCode.visitor_audio_chat_accept;
        MediaChat.chat_window_handler.add_message(actionCode, '');
    },

    hangup: function () {
        var actionCode;
        switch (MediaChat.currentStatus) {
            case MediaChat.enumStatus.audioIncoming:
                actinoCode = MediaChat.enumActionCode.visitor_audio_chat_refuse;
                break;
            case MediaChat.enumStatus.audioChatting:
                actionCode = MediaChat.enumActionCode.visitor_audio_chat_stop;
                break;
            case MediaChat.enumStatus.audioRequesting:
                actionCode = MediaChat.enumActionCode.visitor_audio_chat_cancel_request;
                break;
            case MediaChat.enumStatus.videoIncoming:
                actionCode = MediaChat.enumActionCode.visitor_video_chat_refuse;
                break;
            case MediaChat.enumStatus.videoChatting:
                actionCode = MediaChat.enumActionCode.visitor_video_chat_stop;
                break;
            case MediaChat.enumStatus.videoRequesting:
                actionCode = MediaChat.enumActionCode.visitor_video_chat_cancel_request;
                break;
            default:
                break;
        }
        MediaChat.chat_window_handler.add_message(actionCode, '');
    },
    
    restoreWindow: function() {
        document.getElementById('media-chat-window').className = 'media-chat-window hidden';
    },

    showWindow: function () {
        this.restoreWindow();
        this.remove_class(this.window, 'hidden');
        if (this.currentStatus !== this.enumStatus.notStart)
            this.add_class(this.window, this.enumStatus[this.currentStatus]);
    },

    updateUI: function (agentName, agentAvatar) {
        this.restoreWindow();
        switch (this.currentStatus) {
            case this.enumStatus.notStart:
            default:
                this.enableIconButtons();
                this.setWindowSize(false);
                break;
            case this.enumStatus.audioIncoming:
            case this.enumStatus.videoIncoming:
                this.disableIconButtons();
                this.setAgentInfo(agentName, agentAvatar);
                this.remove_class(this.window, 'hidden');
                this.add_class(this.window, this.enumStatus[this.currentStatus]);
                this.setWindowSize(true);
                break;
            case this.enumStatus.audioRequesting:
            case this.enumStatus.videoRequesting:
                this.disableIconButtons();
                this.setAgentInfo(agentName, agentAvatar);
                this.remove_class(this.window, 'hidden');
                this.add_class(this.window, this.enumStatus[this.currentStatus]);
                this.setWindowSize(true);
                break;
            case this.enumStatus.audioChatting:
            case this.enumStatus.videoChatting:
                this.disableIconButtons();
                this.setAgentInfo(agentName, agentAvatar);
                this.remove_class(this.window, 'hidden');
                this.add_class(this.window, this.enumStatus[this.currentStatus]);
                this.setWindowSize(true);
                this.startTimer(document.getElementsByClassName('chattingDuration')[0]);
                break;
        }
    },

    initialize: function (chatWindowHandler, ifEnableAudioChat, ifEnableVideoChat, ifPopupWindow, embeddedWindowHandler,
        languageAudioChatCalling, languageVideoChatCalling) {
        var mediaChat = {};
        this.chat_window_handler = chatWindowHandler;
        this.isPopupWindow = ifPopupWindow;
        this.embedded_window_handler = embeddedWindowHandler;
        this.window = document.getElementById('media-chat-window');
        this.textAudioCalling = languageAudioChatCalling;
        this.textVideoCalling = languageVideoChatCalling;

        //install events
        if (ifEnableAudioChat && document.getElementById('btn-audio-chat'))
            document.getElementById('btn-audio-chat').onclick = this.onRequestChatClick;
        if (ifEnableVideoChat && document.getElementById('btn-video-chat'))
            document.getElementById('btn-video-chat').onclick = this.onRequestChatClick;

        this.createUI();

        return mediaChat;
    },

    handleMessages: function (code, sender, time, message, message_id, info) {
        var agentName, agentAvatar;
        if (code !== this.enumActionCode.system_if_supportWebrtc) {
            switch (code) {
                case this.enumActionCode.agent_video_chat_request:
                    this.changeStatus(this.enumStatus.videoIncoming, true);
                    agentName = info[1];
                    agentAvatar = info[0];
                    break;
                case this.enumActionCode.agent_video_chat_cancel_request:
                case this.enumActionCode.agent_video_chat_refuse:
                case this.enumActionCode.agent_video_chat_stop:
                case this.enumActionCode.visitor_video_chat_cancel_request:
                case this.enumActionCode.visitor_video_chat_refuse:
                case this.enumActionCode.visitor_video_chat_stop:
                case this.enumActionCode.server_video_chat_no_answer:
                case this.enumActionCode.server_video_chat_end:
                case this.enumActionCode.agent_audio_chat_cancel_request:
                case this.enumActionCode.agent_audio_chat_refuse:
                case this.enumActionCode.agent_audio_chat_stop:
                case this.enumActionCode.visitor_audio_chat_cancel_request:
                case this.enumActionCode.visitor_audio_chat_refuse:
                case this.enumActionCode.visitor_audio_chat_stop:
                case this.enumActionCode.server_audio_chat_no_answer:
                case this.enumActionCode.server_audio_chat_end:
                    this.changeStatus(this.enumStatus.notStart, false);
                    break;
                case this.enumActionCode.agent_video_chat_accept:
                    this.changeStatus(this.enumStatus.videoChatting, true);
                    break;
                case this.enumActionCode.visitor_video_chat_request:
                    this.changeSatatus(this.enumStatus.videoRequesting, true);
                    agentName = info[1];
                    agentAvatar = info[0] === '' ? 'images/avatar.png' : info[0];
                    break;
                case this.enumActionCode.visitor_video_chat_accept:
                    this.changeStatus(this.enumStatus.videoChatting, true);
                    break;
                case this.enumActionCode.agent_audio_chat_request:
                    this.changeStatus(this.enumState.audioIncoming, false);
                    agentName = info[1];
                    agentAvatar = info[0];
                    break;
                case this.enumActionCode.agent_audio_chat_accept:
                    this.changeStatus(this.enumStatus.audioChatting, false);
                    agentName = info[1];
                    agentAvatar = info[0];
                    break;
                case this.enumActionCode.visitor_audio_chat_request:
                    this.changeStatus(this.enumStatus.audioRequesting, false);
                    agentName = info[1];
                    agentAvatar = info[0] === '' ? 'images/avatar.png' : info[0];
                    break;
                case this.enumActionCode.visitor_audio_chat_accept:
                    this.changeStatus(this.enumStatus.audioChatting, false);
                    break;
                default:
                    break;
            }

            clearTimeout(this.actionTimer);
            this.actionTimer = setTimeout(function () {
                MediaChat.updateUI(agentName, agentAvatar);
            }, 100);
        }
        else {
            if (message === 'True')
                this.enableIconButtons();
            else
                this.disableIconButtons();
        }
    },

    //utils
    add_class: function (ele, c) {
        if (ele.className.indexOf(c) == -1) ele.className += ' ' + c;
    },
    remove_class: function (ele, c) {
        ele.className = ele.className.replace(' ' + c, '').replace(c, '');
    },
    has_class: function (ele, cls) {
        var clsName = ' ' + ele.className + ' ';
        return clsName.indexOf(' ' + cls + ' ') >= 0;
    }
};