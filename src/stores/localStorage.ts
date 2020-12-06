import {writable as internal, get} from 'svelte/store'

export function writable(key: string, initialValue: any) {
  const store = internal(initialValue)
  const {subscribe, set} = store
  const json = localStorage.getItem(key)
  
  if (json) {
    set(JSON.parse(json))
  }
  
  return {
    set(value: any) {
      localStorage.setItem(key, JSON.stringify(value))
      set(value)
    },
    update(cb:(store:any) => void) {
      const value = cb(get(store))
      this.set(value)
    },
    subscribe
  }
} 