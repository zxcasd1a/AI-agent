import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1134',
        'true-white': '#FFFFFF',
        'light-gray': '#F7F8FA',
        'cobalt-blue': '#233B90',
        'muted-steel': '#98A4B5',
      },
      fontFamily: {
        sans: ['Avenir Next', 'Arial', 'sans-serif'],
        display: ['Avenir Next', 'Arial', 'sans-serif'],
      },
      spacing: {
        'space-s': '8px',
        'space-m': '24px',
        'space-l': '64px',
        gutter: '160px',
      },
      letterSpacing: {
        'display-uppercase': '0.04em',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        extrabold: '800',
      },
    },
  },
  plugins: [],
}
export default config
