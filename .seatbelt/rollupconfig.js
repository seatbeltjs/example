// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  format: 'cjs',
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
};
