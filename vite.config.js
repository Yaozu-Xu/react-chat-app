import reactRefresh from '@vitejs/plugin-react-refresh'
import reactSvgPlugin from 'vite-plugin-react-svg'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh(), reactSvgPlugin()],
}
