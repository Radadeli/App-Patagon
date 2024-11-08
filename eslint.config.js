import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'       // Updated
import tsParser from '@typescript-eslint/parser'              // Added parser
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default {
  parser: tsParser,                                           // Add TypeScript parser
  ignores: ['dist'],
  extends: [
    js.configs.recommended,
    'plugin:@typescript-eslint/recommended',                  // Use recommended TypeScript rules
    'plugin:prettier/recommended',                            // Adds Prettier configuration
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': tseslint,
    prettier: eslintPluginPrettier,                           // Adds Prettier as a plugin
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',             // Warn against using 'any' type
    '@typescript-eslint/explicit-function-return-type': 'warn', // Enforce return types
    'prettier/prettier': 'error',                             // Format code with Prettier and show errors
  },
}
