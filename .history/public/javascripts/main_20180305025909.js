var x = document.getElementsByClassName(".home");
if (x.removeEventListener) {
    x.addEventListener("mousemove", myFunction);
} else if (x.attachEvent) {
    x.attachEvent("onmousemove", myFunction);
}


function myFunction() {
    document.getElementsByClassName("fly-in-text1").remove(".hidden");
}

function removeHandler() {
    if (x.removeEventListener) {
        x.removeEventListener("mousemove", myFunction);
    } else if (x.detachEvent) {
        x.detachEvent("onmousemove", myFunction);
    }
}