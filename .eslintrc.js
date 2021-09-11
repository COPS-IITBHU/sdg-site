module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vuejs-accessibility/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['vuejs-accessibility', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-indent': ['warn', 2, { baseIndent: 1 }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    $nuxt: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
