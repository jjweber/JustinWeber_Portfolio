var x = document.getElementById("myDIV");
if (x.addEventListener) {
    x.addEventListener("mousemove", myFunction);
} else if (x.attachEvent) {
    x.attachEvent("onmousemove", myFunction);
}

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
    if (x.removeEventListener) {
        x.removeEventListener("mousemove", myFunction);
    } else if (x.detachEvent) {
        x.detachEvent("onmousemove", myFunction);
    }
}