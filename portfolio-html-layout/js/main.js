// menu toggle
const menu = $(".navbar__links");
const menuButton = $(".navbar__icons");
const overlay = $("#overlay");

menuButton.on("click", () => {
    menu.toggleClass("navbar__open");
    menuButton.toggleClass("open");
    overlay.toggleClass("show");
});

overlay.on("click", () => {
    menu.toggleClass("navbar__open");
    menuButton.toggleClass("open");
    overlay.toggleClass("show");
});
