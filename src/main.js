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
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
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
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: "2",
      spaceBetween: 20,
    },
    862: {
      slidesPerView: "3",
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
  },
});

// Sign up page *******************
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const currentType = passwordField.type;
    
    // Toggle password field type between 'password' and 'text'
    if (currentType === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}


// ************ product page   ***********************
// Initialize thumbnail swiper
// Initialize thumbnail swiper
document.addEventListener("DOMContentLoaded", function () {
    // Initialize thumbnail swiper
    var productThumbsSwiper = new Swiper(".product-thumbs-swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
  
    // Initialize main swiper with thumbs
    var productMainSwiper = new Swiper(".product-main-swiper", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: productThumbsSwiper,
      },
    });
  
    // Countdown timer functionality
    function updateCountdown() {
      // Set target date (example: 2 days, 12 hours, 45 minutes, 5 seconds from now)
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 2); // 2 days from now
      targetDate.setHours(targetDate.getHours() + 12); // 12 more hours
      targetDate.setMinutes(targetDate.getMinutes() + 45); // 45 more minutes
      targetDate.setSeconds(targetDate.getSeconds() + 5); // 5 more seconds
  
      const now = new Date();
      const difference = targetDate - now;
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      // Update countdown elements
      document.querySelector('.countdown-days').textContent = days.toString().padStart(2, '0');
      document.querySelector('.countdown-hours').textContent = hours.toString().padStart(2, '0');
      document.querySelector('.countdown-minutes').textContent = minutes.toString().padStart(2, '0');
      document.querySelector('.countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }
  
    // Initial call and then update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
  







