import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  // Browser-friendly UMD build
  {
    input: 'src/index.js',
    output: [
      {
        name: 'countryFlagSvg',
        file: 'dist/country-flag-svg.umd.js',
        format: 'umd'
      },
      {
        file: 'dist/country-flag-svg.esm.js',
        format: 'es'
      },
      {
        file: 'dist/country-flag-svg.min.js',
        format: 'umd',
        name: 'countryFlagSvg',
        plugins: [terser()]
      }
    ],
    plugins: [
      resolve(), 
      commonjs()
    ]
  }
];