import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {base64} from 'rollup-plugin-base64';
import glob from 'glob';
import path from 'path';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    base64({
      include: '**/*.svg'
    })
  ]
};
