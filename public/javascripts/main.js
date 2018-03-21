$(document).ready(function(e) {
    // First name animation code here
    setTimeout(function() {
        $('.fly-in-text1').removeClass('hidden');
    }, 500);

    // Last name animation code here
    setTimeout(function() {
        $('.fly-in-text2').removeClass('hidden');
    }, 1000);

 });

/*
window.addEventListener("load", function(event) {
    [].forEach.call(document.querySelectorAll('.fly-in-text1'), function (el) {
        el.style.visibility = 'block';
    });
});
*/