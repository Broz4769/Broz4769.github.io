/* Test Viewport width of smartscreens */

var w = window.innerWidth;
var h = window.innerHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser width: " + w + ", height: " + h + ".";

/*Viewport width of different devices
Iphone se (2020) - Google Chrome: 375w x 545h (Horizontal)
                 - Google Chrome: 667w x 311h (vertical)
                 - Edge: 375w x 550h (horizontal)


samsung galaxy s7 - Google Chrome: 694w x 1079h

iphone 13 - Google Chrome: 390w
*/
