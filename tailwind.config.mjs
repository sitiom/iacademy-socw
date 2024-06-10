import defaultTheme from 'tailwindcss/defaultTheme'
import fluid, { extract, screens } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    extract
  },
  theme: {
    screens,
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro Variable', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [fluid],
}
