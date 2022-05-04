import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSampleStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */

  const counter = ref(0)

  function increment() {
    counter.value++
  }
  function randomizeCounter() {
    counter.value = Math.round(100 * Math.random())
  }
  return {
    counter,
    increment,
    randomizeCounter,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSampleStore, import.meta.hot))
