import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/entry.js',
  output: [
    { file: pkg.main, format: 'cjs' }, 
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'umd', name: 'boltsearch' }
  ],
  plugins: [terser()]
}