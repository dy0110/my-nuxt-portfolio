module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore' // HTMLの改行を無視する
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always' // <img /> 等の記法を許可
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
