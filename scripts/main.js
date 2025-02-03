const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    console.log(slides);
    const activeSlides = slides.querySelector("[data-active]");
    let newindex = [...slides.children].indexOf(activeSlides) + offset;
    if (newindex < 0) newindex = slides.children.length - 1;
    if (newindex >= slides.children.length) newindex = 0;

    slides.children[newindex].dataset.active = true;
    delete activeSlides.dataset.active;
  });
});

const initApp = () => {
  const hamberBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    console.log("toggled");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamberBtn.classList.toggle("toggle-btn");
  };

  hamberBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
