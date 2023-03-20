/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
        current: 'currentColor',
        'main_text': '#2B3467',
        'btn_bg': '#00BFA6',
        'white': '#fff',
        'black': '#000',
        'gray': 'gray',
        'light_gray': '#EEEEEE'

      },
  
    extend: {},
  },
  plugins: [],
}