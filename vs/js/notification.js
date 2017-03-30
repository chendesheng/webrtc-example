var notification = null
function init_notification(win) {
    win = win || window;

    var PERMISSION_DEFAULT = "default",
        PERMISSION_GRANTED = "granted",
        PERMISSION_DENIED = "denied",
        PERMISSION = [PERMISSION_GRANTED, PERMISSION_DEFAULT, PERMISSION_DENIED],
        empty = {},
        emptyString = "",
        isSupported = (function () {
            var isSupported = false;
            try {
                isSupported = !!(win.Notification || win.webkitNotifications);
            }
            catch (e) { }
            return isSupported;
        }()),
        noop = function () { },
        isFunction = function (value) { return (value && (value).constructor == Function); },
        isString = function (value) { return (value && (value).constructor == String); },
        isObjec = function (value) { return (value && (value).constructor == Object); };
    function requestPermission(callback) {
        if (!isSupported) { return; }
        var callbackFunction = isFunction(callback) ? callback : noop;
        if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            win.webkitNotifications.requestPermission(callbackFunction);
        }
        else if (win.Notification && win.Notification.requestPermission) {
            win.Notification.requestPermission(callbackFunction);
        }
    }
    function isDocumentHidden() {
        return settings
    }
    function permissionLevel() {
        var permission;
        if (!isSupported) { return; }
        if (win.webkitNotifications && win.webkitNotifications.checkPermission) {
            permission = PERMISSION[win.webkitNotifications.checkPermission()];
        }
        else if (win.Notification && win.Notification.permissionLevel) {
            permission = win.Notification.permissionLevel();
        }
        else if (win.Notification && win.Notification.permission) {
            permission = win.Notification.permission;
        }
        return permission;
    }
    function getNotification(title, options) {
        var notification;
        if (win.webkitNotifications) {
            notification = win.webkitNotifications.createNotification(options.icon, title, options.body);
            notification.show();
        }
        else if (win.Notification) { /* Safari 6, Chrome 23+ */
            notification = new win.Notification(title, {
                icon: isString(options.icon) ? options.icon : options.icon.x32,
                body: options.body || emptyString,
                tag: options.tag || emptyString
            });
        }
        return notification;
    }
    function createNotification(title, options) {
        var notification;
        if (isSupported && isString(title) && (options && (isString(options.icon) || isObject(options.icon))) && (permissionLevel() === PERMISSION_GRANTED)) {
            notification = getNotification(title, options);
        }
        return notification;
    }




    //client code
    function show(text) {
        if (permissionLevel() == PERMISSION_DENIED)
            return;

        if (permissionLevel() == PERMISSION_DEFAULT) {
            requestNotify.click();
            return;
        }

        var options = {
            icon: "Images/logo60.png",
            body: text,
            tag: "comm100_notify"
        };
        var noti = createNotification(window.location.host, options);
        noti.onclick = function () {
            window.focus();
            noti.close();
        };
        noti.onshow = function () {
            setTimeout(function () {
                noti.close();
            }, 5000);
        };
    }

    var requestNotify = document.createElement('button');
    requestNotify.style.display = 'none';
    requestNotify.id = 'requestNotify';
    document.body.appendChild(requestNotify);
    requestNotify.onclick = function () {
        requestPermission(function () { });
    };

    return {
        'show': show,
        'request_permission': function () {
            requestNotify.click();
        }
    };
}

var show_notification = (function () {
    var lasttext;
    var timer;
    return function (text, name) {
        if (text == '' || text == null) return;

        lasttext = (typeof name === 'string') ? name + ": " + text : text;

        clearTimeout(timer);
        timer = setTimeout(function () {
            if (!chat_window.is_input_focus()) {
                notification.show(lasttext);
            }
        }, 50);
    }
})();
