/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    'src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'Manrope, sans-serif',
      },
      backgroundImage: {
        success: 'url(assets/icons/check-icon.png)',
        warning: 'url(assets/icons/exclamation-icon.png)',
        error: 'url(assets/icons/cross-icon.png)',
        neutral: 'url(assets/icons/info-icon.png)',
      },
    },
  },
  plugins: [],
}
