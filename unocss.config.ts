import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'icon-btn':
        'text-1.2em cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary dark:hover:text-white disabled:pointer-events-none',
    },
  ],
  rules: [],
  theme: {
    colors: {
      primary: '#ff7e7e',
    },
    fontFamily: {
      default: 'jldys',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
