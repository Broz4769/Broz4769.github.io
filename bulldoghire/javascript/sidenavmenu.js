/*1. Sidenav menu*/
    /* Open the sidenav */
    var width = window.matchMedia("(min-width: 1025px)");

    function openNav() {
      if (width.matches) {
      document.getElementById("mySidenav").style.width = "350px";
      document.getElementById("main").style.marginLeft = "350px";
      }
      else {
      document.getElementById("mySidenav").style.width = "100%";
    }}
    
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      
  }






