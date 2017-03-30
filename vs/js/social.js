function init_fb_login(_onload, _appid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info(id) {
        FB.api("/" + id, {'fields': 'name,email,link,picture'},
            function(resp) {
                _success({
                    'name': resp.name,
                    'email': resp.email,
                    'profile': resp.link,
                    'avatar': resp.picture.data.url,
                    'source': 1
                });
            }
        );
    }

    function login(callback) {
        _success = callback || function(){};

        if (_userid) {
            get_info(_userid);
        } else {
            FB.login(function(response) {
                if (response.authResponse && response.authResponse.userID) {
                    _userid = response.authResponse.userID;
                    get_info(_userid);
                }
            }, {'scope': 'email'});
        }
    }

    var _userid;

    window.fbAsyncInit = function() {
        FB.init({
            appId      : _appid,
            cookie     : true,  // enable cookies to allow the server to access 
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5'
        });

        FB.getLoginStatus(function(response) {
            if (response.authResponse && response.authResponse.userID) {
                _userid = response.authResponse.userID;
            }

            _onload();
        });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); 
        js.id = id;
        js.async = true;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return {
        'login': login
    };
}

function init_gp_login(_onload, _clientid) {
    var _success = function(){};
    _onload = _onload || function(){};

    function get_info() {
        gapi.client.load('plus', 'v1', function() {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            request.execute(function(resp) {
                _success({
                    'name': resp.displayName,
                    'email': get_primary_email(resp),
                    'profile': resp.url,
                    'avatar': resp.image.url,
                    'source': 2
                });
            });
        });
    }
    function get_primary_email(resp) {
        var email = '';
        for (var i=0; i < resp.emails.length; i++) {
            if (resp.emails[i].type === 'account') 
                email = resp.emails[i].value;
        }

        return email;
    }

    var _login_initialized = false;

    function login(success) {
        _success = success || function(){};

        _login_initialized = false;

        gapi.auth.signIn({
            'callback': 'googleplus_login_callback',
            'clientid': _clientid,
            'cookiepolicy': 'single_host_origin',
            'requestvisibleactions': 'http://schema.org/AddAction',
            'scope': 'https://www.googleapis.com/auth/plus.login email'
        });
    }

    window['googleplus_login_callback'] = function (resp) {

        if (resp.status.signed_in) {
            if (_login_initialized) return;
            _login_initialized = true;
            
            get_info();
        }
    };


    window['gponload'] = _onload;

    var po = document.createElement('script');
        po.type = 'text/javascript'; 
        po.async = true;
        po.src = 'https://apis.google.com/js/client:plusone.js?onload=gponload';
    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);

    return {
        'login': login
    };
}

function init_social_meida() {
    if (typeof (init_data) == 'undefined' || !init_data.social_media) return;

    var sm = init_data.social_media;
    if (!sm.fb_login && !sm.gp_login) {
        hide_element($('social-logins'));
        return;
    }

    if (sm.fb_login) {
        window.facebook = init_fb_login(function () {
            show_element('fb-login');
            remove_class($('social-login-icons'), 'loading');
        }, init_data.fb_app_id);
    }

    if (sm.gp_login) {
        window.googleplus = init_gp_login(function () {
            show_element('gp-login');
            remove_class($('social-login-icons'), 'loading');
        }, init_data.gp_app_id);
    }
}

function submit_social_info(data) {
    chat_window.init_name_email(data.name || '', data.email || '');
    data.nav_params = nav_params;

    $('btn-start-chat').disabled = 'disabled';
    
    send_action(15, data, request_chat_handler(function (res) {
        $('btn-start-chat').disabled = '';
    }, function (res) {
        $('btn-start-chat').disabled = '';
    }));
}

