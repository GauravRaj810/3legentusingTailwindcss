<div class=" mx-auto  py-8 flex flex-col md:flex-row gap-8">
        <!-- Left Column: Product Images -->
        <div class="w-full md:w-1/2">
          <!-- Main Product Image Slider -->
          <div class="relative bg-gray-100 mb-4">
            <!-- "NEW" Badge -->
            <div class="absolute top-4 left-4 z-10 bg-white text-black font-bold py-1 px-3 rounded">
              NEW
            </div>
            <!-- Sale Badge -->
            <div class="absolute top-16 left-4 z-10 bg-emerald-500 text-white font-bold py-1 px-3 rounded">
              -50%
            </div>
            <!-- Main Image Swiper -->
            <div class="swiper product-main-swiper w-full h-[500px]">
              <div class="swiper-wrapper">
                <div class="swiper-slide bg-gray-100 flex items-center justify-center">
                  <img src="./images/table-product.png" class="object-contain max-h-full" alt="Tray Table Black" />
                </div>
                <div class="swiper-slide bg-gray-100">
                  <img src="tray-table-detail.jpg" class="object-contain max-h-full" alt="Tray Table Detail" />
                </div>
                <div class="swiper-slide bg-gray-100">
                  <img src="tray-table-usage.jpg" class="object-contain max-h-full" alt="Tray Table In Use" />
                </div>
              </div>
              <!-- Navigation Arrows -->
              <div class="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <!-- Thumbnails -->
          <div class="swiper product-thumbs-swiper w-full h-24">
            <div class="swiper-wrapper">
              <div class="swiper-slide border border-gray-200">
                <img src="./images/img-1-table.png" class="object-cover w-full h-full" alt="Thumbnail 1" />
              </div>
              <div class="swiper-slide border border-gray-200">
                <img src="./images/Paste Image.png" class="object-cover w-full h-full" alt="Thumbnail 2" />
              </div>
              <div class="swiper-slide border border-gray-200">
                <img src="./images/table-thumb-img.png" class="object-cover w-full h-full" alt="Thumbnail 3" />
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column: Product Details -->
        <div class="w-full md:w-1/2">
          <!-- Rating -->
          <div class="flex items-center gap-2 mb-2">
            <div class="flex text-yellow-400">
              <!-- Star Icons here (as in your original code) -->
            </div>
            <span class="text-gray-600">11 Reviews</span>
          </div>
          
          <!-- Product Title -->
          <h1 class="text-4xl font-bold mb-4">Tray Table</h1>
          
          <!-- Product Description -->
          <p class="text-gray-600 mb-6">
            Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
          </p>
          
          <!-- Price -->
          <div class="flex items-center gap-3 mb-6">
            <span class="text-3xl font-bold">$199.00</span>
            <span class="text-gray-500 line-through">$400.00</span>
          </div>
          
          <!-- Countdown Timer -->
          <div class="mb-6">
            <p class="text-gray-600 mb-2">Offer expires in:</p>
            <div class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gray-100 flex items-center justify-center text-2xl font-bold countdown-days">02</div>
                <span class="text-sm text-gray-500">Days</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gray-100 flex items-center justify-center text-2xl font-bold countdown-hours">12</div>
                <span class="text-sm text-gray-500">Hours</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gray-100 flex items-center justify-center text-2xl font-bold countdown-minutes">45</div>
                <span class="text-sm text-gray-500">Minutes</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-16 h-16 bg-gray-100 flex items-center justify-center text-2xl font-bold countdown-seconds">05</div>
                <span class="text-sm text-gray-500">Seconds</span>
              </div>
            </div>
          </div>
    
          <!-- Measurements -->
          <div class="mb-6">
            <h3 class="text-lg mb-2">Measurements</h3>
            <p class="text-xl">17 1/2×20 5/8 "</p>
          </div>
          
          <!-- Color Selection -->
          <div class="mb-6">
            <div class="flex items-center mb-2">
              <h3 class="text-lg">Choose Color</h3>
            </div>
            <p class="mb-4">Black</p>
            <div class="flex gap-3">
              <!-- Color selection boxes (as in your original code) -->
            </div>
          </div>
    
          <!-- Quantity -->
          <div class="flex items-center gap-4 mb-6">
            <div class="flex items-center border border-gray-300">
              <button class="px-4 py-2 text-lg">−</button>
              <input type="text" value="1" class="w-10 text-center py-2" />
              <button class="px-4 py-2 text-lg">+</button>
            </div>
            <button class="border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
            </button>
          </div>
          <!-- Add to Cart Button -->
          <button class="w-full bg-black text-white font-medium py-3 mb-6">
            Add to Cart
          </button>
          
          <!-- Product Info -->
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between py-2">
              <span>SKU</span>
              <span>1117</span>
            </div>
            <div class="flex justify-between py-2">
              <span>CATEGORY</span>
              <span>Living Room, Bedroom</span>
            </div>
          </div>
        </div>
      </div>

      <!-- js code  -->
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
});
  
    // // Countdown timer functionality
    // function updateCountdown() {
    //   // Set target date (example: 2 days, 12 hours, 45 minutes, 5 seconds from now)
    //   const targetDate = new Date();
    //   targetDate.setDate(targetDate.getDate() + 2); // 2 days from now
    //   targetDate.setHours(targetDate.getHours() + 12); // 12 more hours
    //   targetDate.setMinutes(targetDate.getMinutes() + 45); // 45 more minutes
    //   targetDate.setSeconds(targetDate.getSeconds() + 5); // 5 more seconds
  
    //   const now = new Date();
    //   const difference = targetDate - now;
  
    //   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    //   const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    //   // Update countdown elements
    //   document.querySelector('.countdown-days').textContent = days.toString().padStart(2, '0');
    //   document.querySelector('.countdown-hours').textContent = hours.toString().padStart(2, '0');
    //   document.querySelector('.countdown-minutes').textContent = minutes.toString().padStart(2, '0');
    //   document.querySelector('.countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    // }
  
    // // Initial call and then update every second
    // updateCountdown();
    // setInterval(updateCountdown, 1000);

  



