import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setTheme] = useState("light")

  const lightTheme = () => {
    setTheme("light")
  }

  const darkTheme = () => {
    setTheme("dark")
  }

  // Actual change in theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-300">
        
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>

      </div>
    </ThemeProvider>
  )
}

export default App