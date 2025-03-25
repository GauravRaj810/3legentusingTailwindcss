



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