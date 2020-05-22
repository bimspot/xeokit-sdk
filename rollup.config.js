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
  },

  /**
   * Viewer only.
   */
  {
    input: 'src/viewer/Viewer.js',
    output: {
      file: 'dist/xeokit-viewer.module.js',
      format: 'esm',
      name: 'xeokit'
    }
  },
  {
    input: 'src/viewer/Viewer.js',
    output: {
      file: 'dist/xeokit-viewer.js',
      format: 'umd',
      name: 'xeokit'
    }
  },
  {
    input: 'src/viewer/Viewer.js',
    output: {
      file: 'dist/xeokit-viewer.min.js',
      format: 'umd',
      name: 'xeokit',
      plugins: [terser()]
    }
  },
]

const plugins = [
  "AngleMeasurementsPlugin",
  "AnnotationsPlugin",
  "AxisGizmoPlugin",
  "BCFViewpointsPlugin",
  "BIMServerLoaderPlugin",
  "DistanceMeasurementsPlugin",
  "GLTFLoaderPlugin",
  "NavCubePlugin",
  "OBJLoaderPlugin",
  "SectionPlanesPlugin",
  "SkyboxesPlugin",
  "STLLoaderPlugin",
  "StoreyViewsPlugin",
  "TreeViewPlugin",
  "XKTLoaderPlugin",
  "XML3DLoaderPlugin",
]

for (const plugin of plugins) {
  targets.push(
    {
      input: `src/plugins/${plugin}/${plugin}.js`,
      output: {
        file: `dist/plugins/xeokit-plugin-${plugin}.module.js`,
        format: 'esm',
        name: `xeokit-plugin-${plugin}`
      }
    },
    {
      input: `src/plugins/${plugin}/${plugin}.js`,
      output: {
        file: `dist/plugins/xeokit-plugin-${plugin}.js`,
        format: 'umd',
        name: `xeokit-plugin-${plugin}`
      }
    },
    {
      input: `src/plugins/${plugin}/${plugin}.js`,
      output: {
        file: `dist/plugins/xeokit-plugin-${plugin}.min.js`,
        format: 'umd',
        name: `xeokit-plugin-${plugin}`,
        plugins: [terser()]
      }
    }
  )
}

export default targets
