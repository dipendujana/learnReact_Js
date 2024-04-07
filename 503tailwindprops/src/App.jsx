import { useState } from 'react'

import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>

        <div className='flex gap-3 justify-center content-center mt-10'>
        <Card username ="Singma Man"/>
        <br />
        <br />
        <Card username ="The Rock" btnText ="Check out"/>
        </div>
       
    </>
  )
}

export default App
