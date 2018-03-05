var x = document.getElementById("myDIV");
x.addEventListener("mousemove", myFunction);


function myFunction() {
    document.get("demo").innerHTML = Math.random();
}

function removeHandler() {
    if (x.removeEventListener) {
        x.removeEventListener("mousemove", myFunction);
    } else if (x.detachEvent) {
        x.detachEvent("onmousemove", myFunction);
    }
}