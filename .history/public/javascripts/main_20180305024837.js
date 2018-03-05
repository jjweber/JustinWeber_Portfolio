function toggleColor() {
    var myButtonClasses = document.getElementsByClassName(".fly-in-text1").classList;

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