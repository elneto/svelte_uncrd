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
        'un-blue': '#009edb',
      },
    },
  };
