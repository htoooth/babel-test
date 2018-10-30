const presets = [
  ['@babel/env', {
    targets: {
      ie: 8
    },
    useBuiltIns: 'usage',
    modules: false
  }]
];

const plugins = [
  [
    // 重用把 babel 注入的帮助代码， 依赖 @babel/runtime
    "@babel/plugin-transform-runtime",
    {
      // false || 2, 变成全局或者局部
      "corejs": false,
      
      // 生成器运行时的使用，变成全局或者局部
      "regenerator": true,

      // 帮助函数是变成 inline, 还是  lib
      "helpers": true,

      // helpers 切换成 esm
      "useESModules": true
    }
  ]
];

module.exports = { presets, plugins };