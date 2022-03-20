// tailwind.config.cjs
module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    // more options here
    theme: {
      extend:{
        colors: {
        'un-light-gray': '#f2f2f2',
        'un-dark-gray': '#4d4d4d',
        'un-menu-dark': '#333333',
        'un-blue': '#009edb',
        'un-dark-gray': '#4d4d4d',
      },
        fontFamily:{
          titles: ['"Roboto Condensed"', '"Helvetica Neue"', 'Arial', 'ui-sans-serif'],
          body: ["Roboto", "Helvetica Neue", 'Helvetica', 'Arial', 'ui-sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  };
