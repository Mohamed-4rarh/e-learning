/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main-orange': '#ff9500',
      'main-gray': '#f7f7f8',
      'card-gray': '#fcfcfd',
      'button-gray': '#f7f7f8',
      'border': '#f1f1f3',
      'icon-bg': '#fff4e5',
      'card-panner-bg': '#fff9f0',
      'head-color': '#262626',
      'paragraph-color': '#59595a'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
