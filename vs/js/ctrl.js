function init_custom_ctrl(form) {
	var eles = form.getElementsByTagName('SELECT');
	for (var i = 0; i < eles.length; i++) {
		var ele = eles[i];
		var sp = document.createElement('SPAN');
		sp.className='selected';
		var selected = ele.options[ele.selectedIndex];
        if (selected) set_text(sp, inner_text(selected));

		ele.parentNode.appendChild(sp);

		ele.addEventListener('change', function() {
		    update_dropdownlist_selected(this);
		});
		ele.addEventListener('focus', function() {
			add_class(this.parentNode, 'active');
		});
		ele.addEventListener('blur', function() {
			remove_class(this.parentNode, 'active');
		});
	}
}

function update_dropdownlist_selected(ele, val) {
    var sp = ele.parentNode.lastChild;
    var selected = ele.options[ele.selectedIndex];
    if (selected) set_text(sp, inner_text(selected));
}