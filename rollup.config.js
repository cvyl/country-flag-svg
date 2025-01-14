import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { base64 } from 'rollup-plugin-base64';

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
