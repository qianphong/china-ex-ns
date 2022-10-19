import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: '/china-ex-ns/',
  plugins: [
    Vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dts: 'types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}`,
      '#': `${resolve(__dirname, './types')}`,
    },
  },
})
