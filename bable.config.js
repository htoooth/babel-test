const presets = [];
const plugins = [];

module.exports = function(api) {
  return {
    presets,
    plugins,
    
    // BABEL_ENV=production
    env: {
      production: {
        presets: [],
        plugins: []
      }
    }
  };
}