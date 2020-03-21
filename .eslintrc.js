module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'indent': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }]
  }
}
