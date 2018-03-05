function toggleColor() {
    var myButtonClasses = document.getElementsByClassName(".fly-in-text1.hidden").classList;

    if (myButtonClasses.contains("hidden")) {
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