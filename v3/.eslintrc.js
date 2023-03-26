module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: [
        'span',
        'pre',
        'code',
        'b',
        'i',
        'strong',
        'em',
        'a',
        'LvLink'
      ]
    }]
  }
}
