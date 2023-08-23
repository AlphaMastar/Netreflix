!function modify() {
    (function tagPagefix() {
        if (location.pathname == '/tags/') {
            page.style.background='none';
            page.style.boxShadow='none';
            page.style.border='none';
            tag.style.background='none';
        }
    }());
    (function commentFix() {
        var value = document.getElementById('twikoo');
        if (value && location.pathname != '/link/') {
            document.getElementsByClassName('el-input__count')[0].innerHTML = '0/500';
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            input.value = '';
            input.style.height = '121px';
        }
    }());
}(window);