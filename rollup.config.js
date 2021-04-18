import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import url from 'rollup-plugin-url'

const svgr = require('@svgr/rollup').default

export default {
  input: {
    Avatar: 'src/components/Avatar',
    Badge: 'src/components/Badge',
    Icon: 'src/components/Icon',
    Divider: 'src/components/Divider',
    Navbar: 'src/components/Navbar',
    Text: 'src/components/Text',
    Button: 'src/components/Button',
    Heading: 'src/components/Heading',
    Option: 'src/components/Option',
    Paragraph: 'src/components/Paragraph',
    Filter: 'src/components/Filter',
    Select: 'src/components/Select',
    MessageBar: 'src/components/MessageBar',
    Popover: 'src/components/Popover',
    Input: 'src/components/Input',
    Bubble: 'src/components/Bubble',
    VoiceMessage: 'src/components/VoiceMessage',
    Profile: 'src/components/Profile',
    DropDown: 'src/components/DropDown',
    TitleBar: 'src/components/TitleBar',
    FilterList: 'src/components/FilterList',
    ChatApp: 'src/components/ChatApp',
    Conversation: 'src/components/Conversation',
    index: 'src/index',
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
    url(),
    svgr(),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
    }),
  ],
  external: ['react'], // exclude 3rd libraries to bundle with
}
