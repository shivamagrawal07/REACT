import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
    counter =  counter + 1
    setCounter(counter)
  }

  const removevalue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removevalue}
      >decrease value </button>
     </>
  )
}

export default App
