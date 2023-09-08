module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-indent': [2, 2],
    'react/prop-types': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'multiline-ternary': 'off',
    'react/no-unescaped-entities': 'off',
    'comma-dangle': 'off',
  },
};
