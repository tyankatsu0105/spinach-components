const OFF = 'off'
const ERROR = 'error'
const WARN = 'warn'

module.exports = {
  env: {
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    /**
     * Don't use PropsTypes
     */
    'react/prop-types': OFF
  }
}