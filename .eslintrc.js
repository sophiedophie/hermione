// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'prettier',
//     'prettier/@typescript-eslint',
//     'plugin:jest/recommended',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//     APP_SERVER_URL_PREFIX: 'readonly',
//   },
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: 'module',
//   },
//   plugins: ['react', 'react-hooks', '@typescript-eslint'],
//   rules: {
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/no-explicit-any': 'error',
//     '@typescript-eslint/class-name-casing': 'error',
//     '@typescript-eslint/interface-name-prefix': 'error',
//     'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
//     indent: ['error', 2],
//     'no-restricted-imports': [
//       'warn',
//       {
//         paths: [
//           {
//             name: 'updeep',
//             importNames: ['default'],
//           },
//           {
//             name: 'lodash',
//             message: 'Import modules individually instead. Getting rid of babel-plugin-lodash...',
//           },
//         ],
//       },
//     ],
//     'sort-imports': [
//       'error',
//       {
//         ignoreCase: false,
//         ignoreDeclarationSort: true,
//         ignoreMemberSort: false,
//         memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
//       },
//     ],
//     'react/jsx-fragments': ['error', 'syntax'],
//     'react/no-multi-comp': ['error', { ignoreStateless: false }],
//     'react/jsx-sort-props': [
//       'error',
//       {
//         callbacksLast: true,
//         shorthandFirst: true,
//       },
//     ],
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//   },
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         'react/prop-types': 'off',
//         'no-unused-vars': 'off',
//       },
//     },
//   ],
// };
