import { useState, useEffect } from "react"

function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const talentValue = window.localStorage.getItem(key)
    return talentValue !== null ? JSON.parse(talentValue) : defaultValue
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export default useLocalStorage
