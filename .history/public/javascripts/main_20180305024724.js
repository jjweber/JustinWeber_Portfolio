
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
function toggleColor() {
 
 var myButtonClasses = document.getElementById("btn1").classList;
 
 
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
