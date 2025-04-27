'use client'
import { useEffect, useState } from "react"

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
