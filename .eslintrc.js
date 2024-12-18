module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Node.js 환경 활성화
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
  ],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true, // 글로벌 컨텍스트 허용
    },
  },

  plugins: ['react'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
  },

  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
