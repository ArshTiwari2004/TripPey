// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
// tailwind.config.js
//error is coming that export default is not defined
//so we have to use module.exports
// Path: reactvite/tailwind.config.js
export default {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // Define custom font family
        'custom': ["Nanum Pen Script", 'cursive'],
        'custom1':["Delicious Handrawn", 'cursive'],
        'custom2': ["Devonshire", 'cursive']
      },




      colors: {
        // Define custom colors for background gradients
        'glow-purple': '#8C30F5',
        'glow-pink': '#FF0080',
      },
      animation: {
        // Define a fadeIn animation for use in Tailwind classes
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        // Define the fadeIn keyframes
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
