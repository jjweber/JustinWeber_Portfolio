var x = document.getElementsByClassName(".hom");
if (x.removeEventListener) {
    x.addEventListener("mousemove", myFunction);
} else if (x.attachEvent) {
    x.attachEvent("onmousemove", myFunction);
}


function myFunction() {
    document.getElementsByClassName("fly-in-text1.hidden").remove(".hidden");
}

function removeHandler() {
    if (x.removeEventListener) {
        x.removeEventListener("mousemove", myFunction);
    } else if (x.detachEvent) {
        x.detachEvent("onmousemove", myFunction);
    }
}