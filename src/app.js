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
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    thumbs: {
      swiper: productThumbsSwiper,
    },
  });
});

// tabs **************
function showTab(tabNumber) {
  // Hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.add("hidden"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.classList.remove("border-b-2", "border-blue-500", "text-blue-500")
  );

  // Show the selected tab's content
  const activeTab = document.getElementById(`tab-content-${tabNumber}`);
  activeTab.classList.remove("hidden");

  // Add active styles to the selected tab button
  const activeButton = document.getElementById(`tab-${tabNumber}`);
  activeButton.classList.add("border-b-2", "border-black", "text-500");
}

// Initialize by showing the first tab
showTab(1);

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

// *********** count down *************************
function startCountdown() {
  // Get references to the display elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Initial countdown time
  let days = 2;
  let hours = 12;
  let minutes = 45;
  let seconds = 5;

  // Pad single digits with a leading zero [pad = showing digit as 2 place ]
  const pad = (num) => num.toString().padStart(2, "0");

  // Update the countdown
  function updateCountdown() {
    // Decrease seconds
    seconds--;

    // Adjust time when seconds go below zero
    if (seconds < 0) {
      seconds = 59;
      minutes--;

      // Adjust time when minutes go below zero
      if (minutes < 0) {
        minutes = 59;
        hours--;

        // Adjust time when hours go below zero
        if (hours < 0) {
          hours = 23;
          days--;
        }
      }
    }

    // Update the display
    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    // Stop the timer if countdown reaches zero
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdownInterval);
      // Optional: Add code to handle countdown completion
      daysEl.classList.add("bg-red-200");
      hoursEl.classList.add("bg-red-200");
      minutesEl.classList.add("bg-red-200");
      secondsEl.classList.add("bg-red-200");
    }
  }

  // Start the countdown interval
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);


// ************* increasing count *****************
document.addEventListener('DOMContentLoaded', () => {
  const decreaseBtn = document.querySelector('button:first-child');
  const increaseBtn = document.querySelector('button:last-child');
  const quantityInput = document.querySelector('input');

  let quantity = 1;

  decreaseBtn.addEventListener('click', () => {
      if (quantity > 1) {
          quantity--;
          quantityInput.value = quantity;
      }
  });

  increaseBtn.addEventListener('click', () => {
      quantity++;
      quantityInput.value = quantity;
  });
});



// ************* hamburger on product page working *********************
const crossHamburgerBtn = document.querySelector("#cross-hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const BreadCrumb = document.querySelector(".Breadcrumb");
const menuItemSection = document.querySelector(".mobile-menu-item")
// Set initial state
function showMenu() {
  mobileMenu.classList.remove("hidden");
  crossHamburgerBtn.classList.add("hidden");
  BreadCrumb.classList.remove("hidden");
  menuItemSection.classList.add("hidden");
}
function showHamburger() {
  mobileMenu.classList.add("hidden");
  crossHamburgerBtn.classList.remove("hidden");
  BreadCrumb.classList.add("hidden");
  menuItemSection.classList.remove("hidden");
}
// Initial state - showing the menu bars icon first
showMenu();
// Add event listeners
mobileMenu.addEventListener("click", showHamburger);
crossHamburgerBtn.addEventListener("click", showMenu);