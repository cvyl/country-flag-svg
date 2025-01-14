import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { string } from 'rollup-plugin-string';
import glob from 'glob';
import path from 'path';

// Get all SVG files and create separate configs for each
const flagConfigs = glob.sync('src/flags/**/*.svg').map(file => {
  const name = path.basename(file, '.svg');
  return {
    input: file,
    output: {
      file: `dist/${name}.js`,
      format: 'es'
    },
    plugins: [
      string({
        include: '**/*.svg'
      }),
      terser()
    ]
  };
});

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    string({
      include: '**/*.svg'
    })
  ]
};
