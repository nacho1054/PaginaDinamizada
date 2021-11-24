const navDesp = document.querySelector(".Nav-desp");
const navMenu = document.querySelector(".Nav-menu");

navDesp.addEventListener("click", () => {
    navMenu.classList.toggle("Nav-menu_visible");
});
