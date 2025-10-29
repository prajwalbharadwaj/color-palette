import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useModeStore = defineStore('mode', {
  state: () => ({
    mode: useStorage('mode')
  }),
  actions: {
    setMode(newName) {
      this.mode = newName
    },

    resetMode() {
      this.mode = ''
    },
  },
})
