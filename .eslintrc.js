module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
