module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': 'off',
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'no-console': 'off'
  }
};
