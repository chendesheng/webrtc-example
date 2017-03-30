; var frequency_limit = function (config) {
    var recentMsgSentTime = [];
    var isLimited = false;
    var visitorMsgRestrictUnlockTimeKey = 'visitorMsgRestrictUnlockTime_' + siteId + '_' + (nav_params.chatGroup || '');
    var visitorMsgSentTimeKey = 'recentVisitorMsgSent_' + siteId + '_' + (nav_params.chatGroup || '');
    var penaltyFactorKey = 'penaltyFactory_' + siteId + '_' + (nav_params.chatGroup || '');
    var messageDisplayTimer = null;
    var penaltyFactor = 1;
    var message = '';

    var getVisitorMsgRestrictUnlockTime = function () {
        var previousRestrictTimeUnlockString = cookie.get(visitorMsgRestrictUnlockTimeKey);
        if (previousRestrictTimeUnlockString !== undefined && previousRestrictTimeUnlockString !== '') {
            return new Date(+previousRestrictTimeUnlockString);
        }
        return null;
    }

    var clearNotification = function () {
        hide_element('input-limited');
        messageDisplayTimer = null;
    };

    var modifyPenaltyFactory = function () {
        penaltyFactor *= 2;
        if (penaltyFactor > Math.pow(2, config.VisitorMsgRestrictRepeatCount - 1)) penaltyFactor = 1;
        cookie.set(penaltyFactorKey, penaltyFactor);
        return penaltyFactor;
    }

    var setRecentMessageToCookie = function () {
        cookie.set(visitorMsgSentTimeKey, recentMsgSentTime.join(':'));
    }

    var clearLimit = function () {
        isLimited = false;
        recentMsgSentTime = [];
        cookie.set(visitorMsgRestrictUnlockTimeKey, '');
        cookie.set(visitorMsgSentTimeKey, '');
        if (messageDisplayTimer) clearNotification();
    };

    var setLimit = function () {
        var timespan = config.VisitorMsgRestrictTime * penaltyFactor * 1000;
        isLimited = true;
        cookie.set(visitorMsgRestrictUnlockTimeKey, (new Date()).getTime() + timespan);
        setTimeout(clearLimit, timespan);
        message = 'You\'re sending messages too frequently. Please wait for ' +
      Math.max(0, config.VisitorMsgRestrictTime * penaltyFactor) + ' second(s) and try again.'
        modifyPenaltyFactory();
    };

    var ifShouldLimit = function () {
        if (isLimited) return true;
        if (recentMsgSentTime.length <= config.VisitorMsgRestrictCount) return false;
        setLimit();
        return true;
    };

    var clearMessage = function () {
        recentMsgSentTime.shift();
        setRecentMessageToCookie();
    };

    var addMessage = function () {
        if (isLimited) {
            set_text($('input-limited'), 'You\'re sending messages too frequently. Please wait for ' + Math.max(0, Math.floor((getVisitorMsgRestrictUnlockTime() - (new Date()).getTime()) / 1000)) + ' second(s) and try again.');
            return;
        }
        recentMsgSentTime.push((new Date()).getTime());
        setRecentMessageToCookie();
        setTimeout(clearMessage, config.VisitorMsgRestrictDuration * 1000);
    };

    var addNotification = function () {
        if (isLimited) {
            if ($('input-limited').style.display === 'none') {
                show_element('input-limited');
                hide_element('operator-typing');
                set_text($('input-limited'), 'You\'re sending messages too frequently. Please wait for ' + Math.max(0, Math.floor((getVisitorMsgRestrictUnlockTime() - (new Date()).getTime()) / 1000)) + ' second(s) and try again.');
                chat_content.scroll_to_bottom();
            }
            if (messageDisplayTimer) clearTimeout(messageDisplayTimer);
            messageDisplayTimer = setTimeout(function () {
                clearNotification();
            }, 10000);
        }
    }

    var canSendMessage = function () {
        addMessage();
        var ret = !ifShouldLimit();
        addNotification();
        return ret;
    };

    var init = function () {
        var listString = cookie.get(visitorMsgSentTimeKey);
        if (listString !== undefined && listString !== '') {
            var list = listString.split(':');
            for (var i = 0; i < list.length; i += 1) {
                var time = new Date(+list[i]);
                if ((new Date()).getTime() - time > config.VisitorMsgRestrictTime * 1000) continue;
                recentMsgSentTime.push(+list[i]);
                setTimeout(clearMessage, config.VisitorMsgRestrictTime * 1000 - ((new Date()).getTime() - time));
            }
            setRecentMessageToCookie();
        }
        var previousRestrictUnlockTime = getVisitorMsgRestrictUnlockTime();
        if (previousRestrictUnlockTime && (new Date()).getTime() < previousRestrictUnlockTime) {
            isLimited = true;
            var timespan = previousRestrictUnlockTime - (new Date()).getTime();
            setTimeout(clearLimit, timespan);
            message = 'You\'re sending messages too frequently. Please wait for ' +
          Math.max(0, Math.floor(timespan / 1000)) + ' second(s) and try again.';
        } else {
            cookie.set(visitorMsgRestrictUnlockTimeKey, '');
        }
        var penaltyFactorString = cookie.get(penaltyFactorKey);
        if (isNaN(+penaltyFactorString)) penaltyFactor = 1;
        else penaltyFactor = +penaltyFactorString;
    };

    init();

    return {
        'can_send_message': canSendMessage,
        'clear': function () {
            clearLimit();
            cookie.set(penaltyFactorKey, 1);
        }
    };
};