import defaultTheme from 'tailwindcss/defaultTheme'
import fluid, { extract, screens } from 'fluid-tailwind'
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', flowbite.content()],
    extract
  },
  theme: {
    screens,
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        mono: ['Source Code Pro Variable', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [fluid, flowbite.plugin()],
}
