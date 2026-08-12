const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(link => {

link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
        behavior: "smooth"
    });
    navMenu.classList.remove("active");

});

});
