const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
    console.log("Hamburger click");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav ul").forEach(n => n.addEventListener("click", () => {
  console.log("Document click");
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))