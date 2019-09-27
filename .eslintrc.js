module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    API_URL: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/click-events-have-key-events': "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/no-array-index-key": "off",
    "import/extensions": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
  },
};
