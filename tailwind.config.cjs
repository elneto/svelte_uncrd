// tailwind.config.cjs
module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    // more options here
    theme: {
      colors: {
        'un-light-gray': '#f2f2f2',
        'un-dark-gray': '#4d4d4d',
        'un-blue': '#009edb',
      },
      fontFamily:{
        titles: ['"Roboto Condensed"', '"Helvetica Neue"', 'Arial', 'ui-sans-serif'],
        body: ["Roboto", "Helvetica Neue", 'Helvetica', 'Arial', 'ui-sans-serif'],
      },
    },
  };
