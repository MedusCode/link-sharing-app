const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'boundaries',
    'import',
  ],
  settings: {
    'import/resolver': {
      typescript: { project: path.resolve(__dirname, 'tsconfig.json') },
    },
    'boundaries/elements': [
      { type: 'app', pattern: 'src/app/**' },
      { type: 'pages', pattern: 'src/pages/**' },
      { type: 'features', pattern: 'src/features/**' },
      { type: 'entities', pattern: 'src/entities/**' },
      { type: 'shared', pattern: 'src/shared/**' },
      { type: 'animations', pattern: 'src/animations/**' },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          { from: 'app', allow: ['app', 'pages', 'features', 'entities', 'shared', 'animations'] },
          { from: 'pages', allow: ['app', 'pages', 'features', 'entities', 'shared', 'animations'] },
          { from: 'features', allow: ['entities', 'shared', 'animations'] },
          { from: 'entities', allow: ['entities', 'shared', 'animations'] },
          { from: 'shared', allow: ['shared', 'animations'] },
          { from: 'animations', allow: ['animations'] },
        ],
      },
    ],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      pathGroups: [
        { pattern: '@{app,pages,features,entities,shared,animations}/**', group: 'internal', position: 'after' },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],
  },
};
