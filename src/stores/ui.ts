import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    commandOpen: false,
  }),
  actions: {
    toggleCommand() {
      this.commandOpen = !this.commandOpen
    },
    closeCommand() {
      this.commandOpen = false
    },
  },
})
