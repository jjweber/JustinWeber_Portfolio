function toggleColor() {
    var myButtonClasses = document.getElementsByClassName("btn1").classList;

    if (myButtonClasses.contains("blue")) {
      myButtonClasses.remove("blue");
    } else {
      myButtonClasses.add("blue");
    }
    if (myButtonClasses.contains("red")) {
      myButtonClasses.remove("red");
    } else {
      myButtonClasses.add("red");
    }
  }