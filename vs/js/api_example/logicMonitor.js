document.write('https://hosted.comm100.com/AdminManage/JS/jquery-1.12.0.min.js');

onBeforePrechatDisplay(function(){
    var fields = Prechat.getFields();
    var f1, f2, f3;
    for (var i = 0; i < fields.length; i++) {
        var f = fields[i];
        if (f.getName() == 'test1') {
            f1 = f;
        }

        if (f.getName() == 'test2') {
            f2 = f;
        }

        if (f.getName() == 'test3') {
            f3 = f;
        }
    }

    f2.show();
    f3.hide();

    f1.onChange(function() {
        if (f1.getValue() == 'value1') {
            f2.hide();
            f3.show();
        } else {
            f2.show();
            f3.hide();
        }
    });
});
