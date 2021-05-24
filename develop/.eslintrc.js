const useTypeScript = true;

const lintEs = {
  env: {
    'browser': true,
    'jquery': true,
    'node': true,
    'es6': true
  },
  globals: {
  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 2015
  },
  rules: {
    'no-console': 'warn',
    'no-extra-semi': 'warn',
    'no-undef': 'warn',
    'quotes': [
      'warn', 'single'
    ],
    'space-before-blocks': [
      'warn', { 
        'functions': 'always' 
      }
    ] 
  }
};

const lintTs = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: [ 
      './tsconfig.eslint.json' 
    ]
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
  },
};

module.exports = useTypeScript ? lintTs : lintEs;