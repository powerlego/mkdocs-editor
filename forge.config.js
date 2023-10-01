/** @type {import('@electron-forge/shared-types').ForgeConfig} */
module.exports = {
  packagerConfig: {
    ignore: [
      /\.vscode/,
      /\/yarn\.lock/,
      /\.git(ignore|config)/,
      /\/build$/,
      /\.editorconfig/,
      /\.eslintignore/,
      /\.prettierignore/,
      /^\/src/,
      /\.eslint.*/,
      /^.*\.config\.((m|c)?js|ts)/,
      /tsconfig.*/,
    ],
    prune: true,
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    }
  ],
};