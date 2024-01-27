/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
            offWhite: '#FAF9F6',
          },
      },
    },
    plugins: [require("daisyui")],
  }