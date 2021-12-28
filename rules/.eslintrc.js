module.exports = {
  root: true,
  parserOptions: {
    // ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    // sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    '@vue/typescript',
    'plugin:vue/essential'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // plugins: ['vue', '@typescript-eslint'],
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'no-console': process.env.lintMode === 'prod' ? 'error' : 'warn',
    'no-debugger': process.env.lintMode === 'prod' ? 'error' : 'warn',

    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',
    // for in 内部必须有 hasOwnProperty
    // 'guard-for-in': 'error',
    // 禁止对全局变量赋值
    'no-global-assign': 'error',
    // @fixable 必须使用单引号，禁止使用双引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // @fixable 一个缩进必须用二个空格替代
    indent: ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': 'error',
    // @fixable 结尾必须有分号
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    // 二元运算符前后必须有空格
    'space-infix-ops': 'error',
    // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
    // let foo = new Person();
    // bar = bar++;
    // 一元运算符前不能有空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'func-call-spacing': 'error',
    'comma-spacing': 'error',
    'semi-spacing': 'error',
    // @fixable 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': ['error', 'always'],
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': ['error', 'always'],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // @fixable 对象字面量大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'error',
    'array-bracket-spacing': 'error',
    'space-in-parens': 'error',
    'no-tabs': 'error',
    'operator-linebreak': ['error', 'before'],
    'semi-style': 'error',
    'comma-style': 'error',
    'lines-between-class-members': 'error',
    curly: 'error',
    'no-extra-semi': 'error',
    'wrap-iife': 'error',
    // @fixable 禁用行尾空白
    'no-trailing-spaces': 'error',
    // 'lines-around-comment': [
    //   'error', {
    //     'beforeBlockComment': true,
    //     'beforeLineComment': true,
    //   }
    // ],
    'spaced-comment': 'error',
    // @fixable 对象字面量大括号内的首尾必须有空格
    // 'object-curly-spacing': [
    //   'error',
    //   'always',
    //   {
    //     'arraysInObjects': true,
    //     'objectsInObjects': true
    //   }
    // ],
    // 检测不规范空格
    'no-irregular-whitespace': 'error',
    // https://eslint.vuejs.org/rules/no-mutating-props.html
    'vue/no-mutating-props': 'off',
    // https://eslint.vuejs.org/rules/require-valid-default-prop.html
    'vue/require-valid-default-prop': 'warn',
    // https://eslint.vuejs.org/rules/require-prop-type-constructor.html
    // 'vue/require-prop-type-constructor': 'warn',
    // https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
    'vue/no-use-v-if-with-v-for': 'warn',
    // https://eslint.vuejs.org/rules/no-reserved-keys.html
    'vue/no-reserved-keys': 'warn'
  }
};
