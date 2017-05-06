import typescript from 'rollup-plugin-typescript';

export default {
  format: 'cjs',
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
};
