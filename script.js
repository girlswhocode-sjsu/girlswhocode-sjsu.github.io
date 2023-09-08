
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    console.log("hallo");
  
    toggleButton.addEventListener("click", function () {
      navbarLinks.classList.toggle("active");
      console.log("hallo");
    });
  });
  