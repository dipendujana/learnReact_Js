import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Dipendu",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>

    <Card username="Dipendu" banText="Click Koro"/>
    <Card username="Hritash sir"/>

    </>
  )
}

export default App
