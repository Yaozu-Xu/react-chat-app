module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react'],
  plugins: ['@babel/plugin-syntax-jsx', ['module-resolver', {
    root: ['.'],
    alias: {
      '@': './src',
    },
  }]],
}
