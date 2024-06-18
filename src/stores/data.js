import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useDataStore = defineStore('data', () => {
  const notes = ref([])

  return {
    notes
  }
})
