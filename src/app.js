



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
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.add('hidden'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500'));

  // Show the selected tab's content
  const activeTab = document.getElementById(`tab-content-${tabNumber}`);
  activeTab.classList.remove('hidden');

  // Add active styles to the selected tab button
  const activeButton = document.getElementById(`tab-${tabNumber}`);
  activeButton.classList.add('border-b-2', 'border-black', 'text-500');
}

// Initialize by showing the first tab
showTab(1);






const searchToggle = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
let isSearchOpen = false;

searchToggle.addEventListener('click', () => {
    if (!isSearchOpen) {
        // Open search
        searchContainer.classList.remove('scale-x-0', 'opacity-0');
        searchContainer.classList.add('scale-x-100', 'opacity-100');
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    } else {
        // Close search
        searchContainer.classList.remove('scale-x-100', 'opacity-100');
        searchContainer.classList.add('scale-x-0', 'opacity-0');
    }
    isSearchOpen = !isSearchOpen;
});

// Close search when clicking outside
document.addEventListener('click', (event) => {
    if (isSearchOpen && 
        !searchContainer.contains(event.target) && 
        !searchToggle.contains(event.target)) {
        searchContainer.classList.remove('scale-x-100', 'opacity-100');
        searchContainer.classList.add('scale-x-0', 'opacity-0');
        isSearchOpen = false;
    }
});
