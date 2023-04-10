/* 3. Scroll up */

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && window.pageYOffset > sticky) {
    mybutton.style.display = "block";
    header.classList.add("sticky");
  } else {
    mybutton.style.display = "none";
    header.classList.remove("sticky");
  }
}

/// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  modal.style.display = "none";
}