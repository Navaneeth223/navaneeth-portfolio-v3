/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: { 950: '#03040a', 900: '#060816', 800: '#0b1023', 700: '#131a35' },
        neon: { cyan: '#22d3ee', violet: '#a855f7', pink: '#ec4899', lime: '#a3e635' }
      },
      fontFamily: { display: ['Space Grotesk', 'system-ui', 'sans-serif'], body: ['Inter', 'system-ui', 'sans-serif'] },
      animation: { 'spin-slow': 'spin 18s linear infinite', 'float': 'float 6s ease-in-out infinite' }
    }
  },
  plugins: []
}
