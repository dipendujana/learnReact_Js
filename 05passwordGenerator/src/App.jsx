import { useState } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow ] =useState(false)
  const [charAllow,setcharAllow ] =useState(false)
  const [password,setPassword] = useState("")

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Gelerator</h1>
    </>
  )
}

export default App
