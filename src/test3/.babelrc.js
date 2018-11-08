const presets = [
  ['@babel/env', {
    // chrome, opera, edge, firefox, safari, ie, ios, android, node, electron
    // targets 和 browerslist 合并取最低版本
    targets: {
      ie: 8,

      // 是否使用 esmodules
      // esmodules: true,
    },

    // 启用更符合规范的转换，但速度会更慢，默认为 `false`，从目前来看，是更严格的转化，包括一些代码检查。
    spec: false,

    // 有两种模式：normal, loose。其中 normal 更接近 es6， loose 更接近 es5
    loose: false,

    // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false, defaults to "commonjs"
    modules: false,

    // 打印插件使用情况
    debug: true,

    // 按需增加移除一些功能
    // include: [],
    // exclude: [],

    // 增加 polyfills
    // 按需使用
    useBuiltIns: 'usage',
    // 引用一次(入口处引用一次)
    // useBuiltIns: 'entry',
    // 不引用，独自使用，默认值
    // useBuiltIns: false,

    // 强制使用所有的插件
    // forceAllTransforms: false,

    // 配置 browerslist 的位置
    // configPath: ,
    // 配置是否忽略 browerslist 文件
    // ignoreBrowserslistConfig: false,

    // 是否跳过 proposal 的文件
    // shippedProposals: false,
  }]
];

const plugins = [

];

module.exports = { presets, plugins };