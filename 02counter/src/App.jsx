import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(1)

  //let counter = 15

  const addValue = () => {
    if (counter <20) {
      setCounter(prevCounter => prevCounter + 1)

      
    }
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)

    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br/>

      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App