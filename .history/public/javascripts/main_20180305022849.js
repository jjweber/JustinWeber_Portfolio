var animatedLetters = document.querySelectorAll(".fly-in-text1.hidden");

[].forEach.call(animatedLetters, function(fl) {
    fl.class
})

$(function() {
    setTimeout(function() {
        $('.fly-in-text1').removeClass('.hidden');
    }, 500);
})();