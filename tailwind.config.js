const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  darkMode: "class",
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
  theme: {},
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("animationDelay"),
        }
      );
    }),
  ],
};
