module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    env: {
      browser: true
    },
    settings: {
      react: {
        version: '16.13'
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
    },
    plugins: [
      'react',
      'react-hooks',
      'graphql',
      'eslint-plugin-graphql'
    ],
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      '@awell/eslint-config/base',
    ],
    rules: {
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'import/no-unassigned-import': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'jsx-a11y/label-has-associated-control': [ 2, {
        'controlComponents': ['Input'],
      }],
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.test.ts', '**/*.spec.ts','**/*.stories.tsx']}]
    }
  }