module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
  plugins: ['@babel/plugin-syntax-jsx', 'macros', ['module-resolver', {
    root: ['.'],
    alias: {
      '@': './src',
    },
  }]],
}
