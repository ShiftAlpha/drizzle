const nodeLibs = require("node-libs-react-native");
nodeLibs.vm = require.resolve("vm-browserify");

module.exports = {
  resolver: {
    extraNodeModules: nodeLibs
  },
  serializer: {
    getPolyfills: () => [

        require.resolve('react-native/Libraries/polyfills/console.js'),
        require.resolve('react-native/Libraries/polyfills/error-guard.js'),
        require.resolve('react-native/Libraries/polyfills/Number.es6.js'),
        require.resolve('react-native/Libraries/polyfills/String.prototype.es6.js'),
        require.resolve('react-native/Libraries/polyfills/Array.prototype.es6.js'),
        require.resolve('react-native/Libraries/polyfills/Array.es6.js'),
        require.resolve('react-native/Libraries/polyfills/Object.es7.js'),
      ]
    }
  };