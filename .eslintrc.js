module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['import'],
  rules: {
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'error',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
