import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("../public/parallax.jpg")',
      },
      colors: {
        'primary': '#415A77',
        'secondary': '#778DA9',
        'dark': '#1B263B',
        'background': '#E0E1DD',
      },
    },
  },
  plugins: [],
}
export default config
