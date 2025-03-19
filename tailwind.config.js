// tailwind.config.js
module.exports = {
    content: [
      "./index.html",  // Add the locations where Tailwind should look for classes
      "./src/**/*.{vue,js,ts,jsx,tsx}",  // Add this if you're using Vue, React, etc.
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'], // Add Inter font here
          flow: ['Flow Circular', 'sans-serif'], // Optional: Add Flow Circular font if needed
        },
        colors: {
          'custom-gray-green': '#6C7275', // Custom color
        },
      },
    },
    plugins: [],
  }
  