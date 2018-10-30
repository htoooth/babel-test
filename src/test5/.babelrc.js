const presets = [
  ['@babel/env', {
    targets: {
      ie: 8
    },
    useBuiltIns: 'usage'
  }]
];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }
  ],
  'syntax-dynamic-import',
  'lodash'
];

module.exports = { presets, plugins , comments: true};