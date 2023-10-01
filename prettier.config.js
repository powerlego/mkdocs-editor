//prettier.config.js
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  arrowParens: "always",
  printWidth: 120,
  useTabs: false,
  quoteProps: "as-needed",
  plugins: ["prettier-plugin-svelte"],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }]
};