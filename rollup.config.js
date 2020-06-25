import {terser} from 'rollup-plugin-terser';

const targets = [
  /**
   * Viewer and all plugins
   */
  {
    input: 'index.js',
    output: {
      file: 'dist/xeokit-sdk.module.js',
      format: 'esm',
      name: 'xeokit'
    }
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/xeokit-sdk.js',
      format: 'umd',
      name: 'xeokit'
    }
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/xeokit-sdk.min.js',
      format: 'umd',
      name: 'xeokit',
      plugins: [terser()]
    }
  }
]

export default targets
