const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
window.addEventListener('scroll', function() {
  var iconContainer = document.getElementById('iconContainer');
  if (window.scrollY > 800) { // Change 100 to the number of pixels from top to start displaying the icons
      iconContainer.classList.add('visible');
  } else {
      iconContainer.classList.remove('visible');
  }
});
/*PRE */
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const loaderBar = document.getElementById("loader-bar");
  const content = document.getElementById("content");
  const minLoadTime = 2000; 
  const startTime = Date.now();

  // Function to update loader bar based on the load progress
  function updateLoader() {
      const elapsedTime = Date.now() - startTime;
      const percentage = Math.min((elapsedTime / minLoadTime) * 100, 100);
      loaderBar.style.width = `${percentage}%`;
  }

  // Update the loader every 100ms
  const loaderInterval = setInterval(updateLoader, 100);

  window.onload = function () {
      const loadTime = Date.now() - startTime;
      const remainingTime = minLoadTime - loadTime;

      setTimeout(
          () => {
              clearInterval(loaderInterval); // Stop updating the loader bar
              preloader.style.opacity = "0";
              setTimeout(() => {
                  preloader.style.display = "none";
                  content.style.display = "block"; // Show the main content
                  document.body.style.overflow = "auto"; // Enable scrolling after preloader is gone
              }, 1000); // Duration of the fade-out transition
          },
          remainingTime > 0 ? remainingTime : 0
      );
  };
});

// Get elements
const popup = document.getElementById('rateUsPopup');
const openPopupBtn = document.getElementById('openPopup');
const closeBtn = document.querySelector('.close-btn');
const stars = document.querySelectorAll('.star');
const submitBtn = document.getElementById('submitRating');

// Open popup
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Star rating
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
  });
});

// Popup after 30 seconds
setTimeout(() => {
  popup.style.display = 'flex';
}, 90000);

// Submit button (for demonstration purposes)
submitBtn.addEventListener('click', () => {
  window.location.replace("https://maps.app.goo.gl/deVe7WahFw2gN6a2A");
  popup.style.display = 'none';
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
