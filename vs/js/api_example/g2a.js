document.write('https://hosted.comm100.com/AdminManage/JS/jquery-1.12.0.min.js');

onBeforePostChatDisplay(function() {
    $('#main').hide();
    $('#main').insertBefore('<div id="g2a-postchat-window"><div>field1</div><button id="g2a-postchat-submit">Submit</button></div>');
    $('#g2a-postchat-submit').click(function() {
        $('#main').show();
        PostChat.submit();
    });
});
