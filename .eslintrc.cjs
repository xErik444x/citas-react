module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'max-len': [
      'warn',
      {
        code: 120, // puedes ajustar este valor según tus preferencias
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};