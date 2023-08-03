/** @type {import('tailwindcss').Config} */

const TRANSPARENCY_STOPS = [
  0, 1, 2, 3, 4, 5, 6, 10, 15, 20, 30, 35, 40, 50, 60, 70, 80, 90, 100,
];

function generateDynamicColor(varName) {
  return TRANSPARENCY_STOPS.reduce(
    (acc, i) => ({ ...acc, [i]: `rgba(var(--${varName}-color), ${i / 100})` }),
    {
      DEFAULT: `rgb(var(--${varName}-color))`,
    },
  );
}

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /bg-(primary|contrast|gray|slate)-( 0|1|2|3|4|5|6|10|15|20|30|35|40|50|60|70|80|90|100|200|300|400|500|600|700|800)/, // You can display all the colors that you need
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      dark: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
      none: 'none',
    },
    // colors: {
    //   primary: generateDynamicColor('primary'),
    //   contrast: generateDynamicColor('contrast'),
    // }
  },
  plugins: [],
}
