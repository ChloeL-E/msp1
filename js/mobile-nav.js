/*function toggleMobileMenu() {
  var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  var headerNav = document.querySelector('.nav');

  mobileMenuBtn.classList.toggle('mobile-menu-active');
  headerNav.classList.toggle('mobile-menu-active');
}*/


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");
 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav ul").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))