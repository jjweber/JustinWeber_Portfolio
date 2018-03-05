var x = document.getElementById("myDIV");
if (x.removeEventListener) {
    x.addEventListener("mousemove", myFunction);
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