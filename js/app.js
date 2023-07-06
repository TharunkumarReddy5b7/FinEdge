

document.getElementsByClassName("needs-validation")[0].addEventListener("submit", function (event) {
    if (event.target.checkValidity() == false) {
      event.preventDefault();
      event.target.classList.add("was-validated");

    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('navbarNav');
    var pageContent = document.getElementById('pageContent');
  
    pageContent.addEventListener('click', function() {
      if (menu.classList.contains('show')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });