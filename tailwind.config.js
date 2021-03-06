module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Space Mono', 'mono'],
      title: ['Archivo Narrow', 'sans'],
      sans: ['Archivo', 'sans'],
      serif: ['Alegreya', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
