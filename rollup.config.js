// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: '../example/.seatbelt/imports.ts',
  format: 'cjs',
  plugins: [
    resolve({
      extensions: [ '.ts', '.js', '.json' ]
    }),
    typescript({
      typescript: require('typescript')
    })
  ],
  dest: '../example/.seatbelt/index.js'
};
