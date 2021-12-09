
// Responsive nabar -----------------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// -----------------------------------------------------------------------------------
// Navbar color change
var myNav = document.getElementById("navbar");
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "#7f53ac");
        }
   
        else{
            $(".navbar").css("background" , "white");  	
        }
    })
  })

// -----------------------------------------------------------------------------------
//Loader
