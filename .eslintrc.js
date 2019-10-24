module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "curly": "error",
    "quotes": [ "error", "single" ],
    "jsx-quotes": [ "error", "prefer-double" ],
    "semi": [ "error", "always" ],
    "indent": [ "error", 2 ],
    "array-bracket-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"]
  }
};