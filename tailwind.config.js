/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375',
      sm:'640',
      md:'768',
      lg:'1024',

    },
    extend: {},
  },
  plugins: [],
}

