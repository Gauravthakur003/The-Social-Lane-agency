import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('tsl-theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tsl-theme', theme)
  }, [dark])

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDark((current) => !current)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}