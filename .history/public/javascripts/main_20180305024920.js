function toggleColor() {
    var myButtonClasses = document.getElementsByClassName(".fly-in-text1.hidden").classList;

    if (myButtonClasses.contains("hidden")) {
      myButtonClasses.remove("hidden");
    } 
    if (myButtonClasses.contains("red")) {
      myButtonClasses.remove("red");
    } else {
      myButtonClasses.add("red");
    }
  }