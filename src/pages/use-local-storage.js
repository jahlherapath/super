import { useState, useEffect } from "react"

function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return defaultValue
    const talentValue = window.localStorage.getItem(key)
    return talentValue !== null ? JSON.parse(talentValue) : defaultValue
  })
  useEffect(() => {
    // Use effect will only run on the client so dont need to do a check here
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export default useLocalStorage
