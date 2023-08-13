import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7C3AED',
        'black': '#2B2B2B',
        'gray': '#606060',
        'white': '#F8F7FF',
        'fullWhite': '#FFFFFF'
      },
    },
  },
  plugins: [],
}
export default config
