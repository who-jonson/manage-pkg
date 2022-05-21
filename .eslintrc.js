module.exports = {
  extends: ['@antfu'],
  rules: {
    '@typescript-eslint/comma-dangle': [2, 'never'],
    '@typescript-eslint/semi': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-function-paren': ['error', 'never'],
    'semi': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-spaces-and-tabs': 'off'
  }
};
