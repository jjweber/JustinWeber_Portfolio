var animatedLetters = document.querySelectorAll(".fly-in-text1.hidden");

for (var i = 0; i < animatedLetters.length; i++) {
    setTimeout(function() {
        animatedLetters[i].className.remove('.hidden');
    }, 500);
}
