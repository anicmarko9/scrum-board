import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx, mdx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#fedba6',
      primaryDarker: '#fece85',
      secondary: '#7f6743',
      lighterBG: '#f9f3f1',
      darkerBG: '#cdbfba',
      accent: '#fdb441',
      success: '#2ecc71',
      danger: '#e74c3c',
      warning: '#f1c40f',
    },
    animation: {},
    keyframes: {},
  },

  plugins: [],
};
export default config;
