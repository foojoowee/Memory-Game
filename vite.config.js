import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: "/vite-deploy/",
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        numbers: resolve(root, 'numbers.html'),
        sequence: resolve(root, 'sequence.html')
      }
    }
  }
})
