const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");
 
console.log("Test logging 123")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav ul").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))