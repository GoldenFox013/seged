import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchItems() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:3000/items')
        this.items = response.data
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
  }
})
