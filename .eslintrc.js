module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks':'error',
    'react-hooks/exhaustive-deps':'warn',
    "prettier/prettier": "off", // Desativa todas as regras do Prettier
    "react/react-in-jsx-scope": "off", // Desativa a regra que exige React em escopo ao usar JSX
    "noundef":0,
    "react/jsx-no-useless-fragment":"off",
    "react/jsx-boolean-value":"off",
    "import/no-extraneous-dependencies":"off"
  },
};
