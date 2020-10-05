module.exports = {
  printWidth: 100,
  tabWidth: 4,
  useTabs: false,
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  trailingComma: "none",
  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 2,
      },
    },
  ],
  svelteSortOrder: "styles-scripts-markup",
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
};
