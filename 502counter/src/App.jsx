import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


    const addValue = ()  => {
      if (counter<20) {
        setCounter(counter + 1);
      }
 
    
  }

    const removeValue = ()  => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
 
    
  }

  return (
    <>
    <h1 className='bg-green-600 p-6 rounded-xl text-2xl'> Chai aur code Counter </h1>
    <br />
    <br />
    <h2 className='border-solid border-2 inherit bg-blue-200 rounded-xl p-4 text-2xl'>Current Value: {counter}</h2>
    <br />
    <br />

    <button onClick={addValue} className='border-solid border-2 inherit bg-red-400 rounded-xl p-4  text-2xl'>
      Add Value: {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}className='border-solid border-2 inherit bg-red-400 rounded-xl p-4 text-2xl'>Remove Value: {counter}</button>


    </>  
  )
}
 
export default App
