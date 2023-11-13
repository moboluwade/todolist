import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'list-black': '#0D0D0D',
        'list-grey': '#1A1A1A',
        'list-lightGrey': '#262626',
        'list-darkGrey': '#131313',
        'list-blue': '#4EA8DE',
        'list-blue-dark': '#1E6F9F',
        'list-purple': '#8284FA',
        'list-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
}
export default config
