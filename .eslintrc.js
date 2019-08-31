module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:mdx/recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"]
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": 0
  }
}
