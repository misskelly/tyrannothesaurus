module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/array-bracket-spacing': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}