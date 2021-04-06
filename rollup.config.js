import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: {
    index: 'src/index',
    Avatar: 'src/components/Avatar',
    Badge: 'src/components/Badge',
    Icon: 'src/components/Icon',
    Navbar: 'src/components/Navbar',
    Text: 'src/components/Text',
    Button: 'src/components/Button',
    Heading: 'src/components/Heading',
    Option: 'src/components/Option',
    Paragraph: 'src/components/Paragraph',
    Filter: 'src/components/Filter',
    Select: 'src/components/Select',
    Card: 'src/components/Card',
  },
  output: [{
    dir: 'lib/esm',
    format: 'esm',
    exports: 'auto',
  },
  {
    dir: 'lib/cjs',
    format: 'cjs',
    exports: 'auto',
  },
  ],

  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
    }),
  ],
  external: ['react'], // exclude 3rd libraries to bundle with
}
