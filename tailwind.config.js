/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Deep dark background - dark navy blue
        'dark-bg': '#1a1f2e',
        'dark-card': '#232936',
        'dark-card-alt': '#2a3142',
        // Coral/red-orange accent
        'coral': '#e8533a',
        'coral-dark': '#d13d24',
        'coral-light': '#ff6b52',
        // Text colors  
        'text-primary': '#ffffff',
        'text-secondary': '#aaaaaa',
        'text-muted': '#666666',
        // Maintain compatibility with 'primary' naming
        primary: '#e8533a',
        'primary-light': '#ff6b52',
        'primary-dark': '#d13d24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '700' }],
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
    },
  },
  plugins: [],
}
