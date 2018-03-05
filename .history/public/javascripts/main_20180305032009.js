jQuery.noConflict();
jQuery(document).ready(function(){
    setTimeout(function() {
        ('.fly-in-text1').removeClass('.hidden');
    }, 500);
});

/*
window.addEventListener("load", function(event) {
    [].forEach.call(document.querySelectorAll('.fly-in-text1'), function (el) {
        el.style.visibility = 'block';
    });
});
*/