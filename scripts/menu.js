const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");

botonMenu.addEventListener("click", () => {

    menu.classList.add("abierto");
    overlay.classList.add("abierto");

});

overlay.addEventListener("click", () => {

    menu.classList.remove("abierto");
    overlay.classList.remove("abierto");

});