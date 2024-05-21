const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
// main.js
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const minLoadTime = 5000; // Minimum preloader display time in milliseconds (5 seconds)
  const startTime = Date.now();

  window.onload = function () {
    const loadTime = Date.now() - startTime;
    const remainingTime = minLoadTime - loadTime;

    setTimeout(
      () => {
        preloader.style.opacity = "0";
        setTimeout(() => {
          preloader.style.display = "none";
          document.body.style.overflow = "auto"; // Enable scrolling after preloader is gone
        }, 1000); // Duration of the fade-out transition
      },
      remainingTime > 0 ? remainingTime : 0
    );
  };
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

//gallery
const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach((img) => {
  // Calling showLightBox function with passing clicked img src as argument
  img.addEventListener("click", () =>
    showLightbox(img.querySelector("img").src)
  );
});

const showLightbox = (img) => {
  // Showing lightbox and updating img source
  lightbox.querySelector("img").src = img;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
};

closeImgBtn.addEventListener("click", () => {
  // Hiding lightbox on close icon click
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});
