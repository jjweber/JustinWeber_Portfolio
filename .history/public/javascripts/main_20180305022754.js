var animatedLetters = document.querySelectorAll(".fly-in-text1.hidden");

[].forEach

$(function() {
    setTimeout(function() {
        $('.fly-in-text1').removeClass('.hidden');
    }, 500);
})();