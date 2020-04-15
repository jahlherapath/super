import { useState, useEffect } from "react"

// function useLocalStorage(defaultValue, key) {
//   const [value, setValue] = useState(() => {
//     if (typeof window === "undefined") return defaultValue
//     const talentValue = window.localStorage.getItem(key)
//     return talentValue !== null ? JSON.parse(talentValue) : defaultValue
//   })
//   useEffect(() => {
//     // Use effect will only run on the client so dont need to do a check here
//     window.localStorage.setItem(key, JSON.stringify(value))
//   }, [key, value])
//   return [value, setValue]
// }

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
