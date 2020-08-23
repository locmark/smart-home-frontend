module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    indent: [
      'error',
      2
    ],
    "semi": [
        "error",
        "always"
    ],
    "no-var": [
        "error"
    ],
    "quotes": [
        "error",
        "single",
        {
            "allowTemplateLiterals": true
        }
    ],
    "no-unused-vars": 0,
    'vue/no-unused-components': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
