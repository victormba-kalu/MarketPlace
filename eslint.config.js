// eslint.config.js
import globals from 'globals';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  pluginPrettierRecommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],
    },

    ignores: ['dist/**', 'node_modules/**'],
  },
];
