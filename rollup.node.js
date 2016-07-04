import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import string from 'rollup-plugin-string'
import builtins from 'rollup-plugin-node-builtins'
import json from 'rollup-plugin-json'
import sass from 'rollup-plugin-sass'

const options = {
  dest: 'build/components.node.js',
  entry: 'components/components.js',
  format: 'cjs',
  external: ['moment', 'whatwg-fetch', 'webcomponents.js'],
  plugins: [
    string({ extensions: ['html'] }),
    sass(),
    json(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ 'es2015-rollup', 'stage-1' ]
    }),
    builtins(),
    resolve({ main: true }),
    commonjs({
      exclude: [
        'node_modules/rollup-plugin-node-globals/**'
      ]
    }),
    globals()
  ],
  sourceMap: true
}

export default options