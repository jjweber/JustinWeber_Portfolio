var animatedLetters = document.getElementsByClassName(".fly-in-text1");

for (var i = 0; i < animatedLetters.length; i++) {
    setTimeout(function() {
        animatedLetters[i].className.remove('.hidden');
    }, 500);
}
