const path = require('path');

const LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
const SHARED_SEGMENTS = ['lib', 'ui'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'boundaries', 'import', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: { project: path.resolve(__dirname, 'tsconfig.json') },
    },
    'boundaries/elements': LAYERS.map((type) => ({
      type,
      pattern: `src/${type}/**`,
    })),
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

  rules: {
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          { from: 'app',      allow: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
          { from: 'pages',    allow: ['widgets', 'features', 'entities', 'shared'] },
          { from: 'widgets',  allow: ['features', 'entities', 'shared'] },
          { from: 'features', allow: ['entities', 'shared'] },
          { from: 'entities', allow: ['shared'] },
          { from: 'shared',   allow: ['shared'] },
        ],
      },
    ],

    'import/order': 'off',
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^\\u0000', '^react$', '^@?\\w'],
        ['^@(app|pages|widgets|features|entities|shared)(/.*)?$'],
        ['^\\.'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': ['error', { count: 2 }],
    'no-restricted-imports': ['error', {
      patterns: [
        ...LAYERS
          .filter((l) => l !== 'shared')
          .map((l) => ({
            group: [`@${l}/*/*`],
            message: `Import from ${l} only via its public API: @${l}/<module> (index.ts).`,
          })),
        { group: ['@shared/*/*'], message: 'Import from shared only via a segment public API: @shared/<segment>.' },
      ],
    }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'eol-last': ['error', 'always'],
  },

  overrides: [
    ...LAYERS
      .filter((l) => l !== 'shared')
      .map((l) => ({
        files: [`src/${l}/*/**`],
        rules: {
          'no-restricted-imports': ['error', {
            patterns: [{
              group: [`@${l}/*`],
              message: `Inside ${l}, use only relative imports (./, ../) for its own code.`,
            }],
          }],
          'import/no-relative-parent-imports': 'off',
        },
      })),
    ...SHARED_SEGMENTS.map((seg) => ({
      files: [`src/shared/${seg}/**`],
      rules: {
        'no-restricted-imports': ['error', {
          patterns: [
            { group: [`@shared/${seg}`], message: `Inside shared/${seg}, use relative imports for its own code.` },
            { group: ['@shared/*/*'],    message: 'Use only segment public API for shared: @shared/<segment>.' },
          ],
        }],
        'import/no-relative-parent-imports': 'off',
      },
    })),
  ],
};
