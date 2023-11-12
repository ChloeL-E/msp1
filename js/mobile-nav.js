let headerMain = document.querySelector(".header");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

let isMenuOpen = false;

headerMobileBtn.onclick = burgerNav(); {
    if (!isMenuOpen) {
        headerMain.style.display = "flex";
        isMenuOpen = true;
    }
    else if (isMenuOpen) {
        headerMain.style.display = "none";
        isMenuOpen = false;
    }
}