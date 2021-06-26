// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state() {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
})
