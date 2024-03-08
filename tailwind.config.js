// Note: This file is used to configure tailwindcss

module.exports = {
  content: ["./src/**/*.{ts,tsx}"], // or 'media' or 'class'
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
    // ...
  ],
};
