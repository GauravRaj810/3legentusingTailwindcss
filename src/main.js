// ************* promtion cross button **********************

const promoBanner = document.querySelector("#promo-banner");
const crossBtnIcon = document.querySelector("#cross-btn i");

crossBtnIcon.addEventListener("click", function () {
  // Add the slide-up class to trigger the animation
  promoBanner.classList.add("slide-up");

  // After animation completes, remove the banner completely from DOM
  setTimeout(() => {
    promoBanner.remove(); // This removes the element completely from the DOM
  }, 300); // Match this to your animation duration
});

// ****************** hero section swiper    ******************************
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: false,
  },
});

// //  video configuration
// video.addEventListener('click', function () {
//     if (video.paused) {
//       video.play(); // Play video if paused
//     } else {
//       video.pause(); // Pause video if playing
//     }
//   });


//  ************** cross hamburger working  ***********

const crossHamburgerBtn = document.querySelector("#cross-hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const heroSection = document.querySelector(".hero-section");
const menuItemSection = document.querySelector(".mobile-menu-item")
// Set initial state
function showMenu() {
  mobileMenu.classList.remove("hidden");
  crossHamburgerBtn.classList.add("hidden");
  heroSection.classList.remove("hidden");
  menuItemSection.classList.add("hidden");
}
function showHamburger() {
  mobileMenu.classList.add("hidden");
  crossHamburgerBtn.classList.remove("hidden");
  heroSection.classList.add("hidden");
  menuItemSection.classList.remove("hidden");
}
// Initial state - showing the menu bars icon first
showMenu();
// Add event listeners
mobileMenu.addEventListener("click", showHamburger);
crossHamburgerBtn.addEventListener("click", showMenu);



// ************ arrival section swiper   ******************************
var featureSwiper = new Swiper(".featureSwiper", {
  grabCursor: true,           // Enable grab cursor when hovering over the swiper
  slidesPerView: "auto",      // Set slides per view to 'auto' to respect the width of each slide
  spaceBetween: 10,           // Space between slides
  pagination: {
    el: ".swiper-pagination",  // Select pagination container
    type: "progressbar",      // Set pagination type to progress bar
  },
  breakpoints: {
    640: {
      slidesPerView: "auto",   // Keep slides' width as 'auto'
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",   // Keep slides' width as 'auto'
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.2,      // Keep slides' width as 'auto'
      spaceBetween: 15,
    },
  },
});








