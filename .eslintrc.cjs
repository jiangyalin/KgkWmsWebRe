module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: [
    'dist/**',
    'node_modules/**',
    '.idea/**',
    'services/generated/**',
    'shared/utils/**',
    'swaggerToApi.mjs',
    'types/**/*.d.ts',
  ],
  rules: {
    // React 17+ 新 JSX Transform 不再需要显式 import React。
    'react/react-in-jsx-scope': 'off',
    // 同上，JSX 使用不再依赖 React 变量本身。
    'react/jsx-uses-react': 'off',
    // 允许使用箭头函数组件，贴近现代 React 项目常见写法。
    'react/function-component-definition': 'off',
    // 允许单导出文件继续使用命名导出，方便重构和统一导入风格。
    'import/prefer-default-export': 'off',
    // TypeScript 已能通过可选属性表达默认值需求，不强制 defaultProps。
    'react/require-default-props': 'off',
    // TypeScript 已负责 props 类型检查，不再要求 React PropTypes。
    'react/prop-types': 'off',
  },
};
