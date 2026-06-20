const tseslint = require('typescript-eslint');
const eslint = require('@eslint/js');

module.exports = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', 'jest.config.js', 'eslint.config.js'],
  }
);
