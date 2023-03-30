/* 2. Modal Menu Tab */
// Get the modal
var modalmenu = document.getElementById("myModal");

// Get the button that opens the modal
var modalmenubtn = document.getElementsByClassName("ModalmenuBtn")[0];

// Get the <span> element that closes the modal
var spanmenu = document.getElementsByClassName("menuclose")[0];

// When the user clicks on the button, open the modal
modalmenubtn.onclick = function() {
  modalmenu.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanmenu.onclick = function() {
  modalmenu.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalmenu) {
    modalmenu.style.display = "none";
  }
}
