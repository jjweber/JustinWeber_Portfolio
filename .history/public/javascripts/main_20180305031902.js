jQuery.noConflict();
jQuery(document).ready(function(){
    jQuery("div").hide();
});  
$(function() {
    setTimeout(function() {
        $('.fly-in-text1').removeClass('.hidden');
    }, 500);
})();

/*
window.addEventListener("load", function(event) {
    [].forEach.call(document.querySelectorAll('.fly-in-text1'), function (el) {
        el.style.visibility = 'block';
    });
});
*/