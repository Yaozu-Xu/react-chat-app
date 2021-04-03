import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: './lib/bundle.js', // should be the same as main in package.json
    format: 'cjs',
  },
  plugins: [
    // parse es6 react and emotion syntax
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['react'], // exclude 3rd libraries to bundle with
}
