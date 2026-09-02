import { defineConfig, globalIgnores } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: { parser: tsParser, parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' } },
    rules: {},
  },
  globalIgnores(['.next/**', 'node_modules/**']),
])
