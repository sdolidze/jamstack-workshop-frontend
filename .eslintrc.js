module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  env: {
    node: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for nuxt context extending
          'config',
        ],
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: ['state', 'getters'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-len': [
      'error',
      {
        code: 100,
        template: 100,
        ignoreHTMLTextContents: true,

      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
};
