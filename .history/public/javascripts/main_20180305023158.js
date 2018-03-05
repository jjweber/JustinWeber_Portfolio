var animatedLetters = document.querySelectorAll(".fly-in-text1.hidden");

for (var i = 0; i < animatedLetters.length; i++) {
    setTimeout(function() {
        animatedLetters[i].classList.remove('hidden');
    }, 500);
}

$(function() {
    setTimeout(function() {
        $('.fly-in-text1').removeClass('.hidden');
    }, 500);
})();