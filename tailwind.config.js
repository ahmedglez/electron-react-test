// Note: This file is used to configure tailwindcss

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./node_modules/flowbite/**/*.js"], // or 'media' or 'class'
  theme: {   
    extend: {
      fontSize: {
        'xl': '14px',
      },           
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
    // ...
  ],
};
