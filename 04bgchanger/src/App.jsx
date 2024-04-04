import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
  <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-x-3 p-y-2 rounded-xl'>
        <button onClick={() => setColor("red")}
        className='outline-none px-4 p-y1 rounded-full text-white shadow-lg m-1' style={{backgroundColor:"red"}}>Red</button>

        <button onClick={() => setColor("green")}
        className='outline-none px-4 p-y1 rounded-full text-white shadow-lg m-1' style={{backgroundColor:"green"}}>Green</button>

        <button onClick={() => setColor("yellow")}
        className='outline-none px-4 p-y1 rounded-full text-black shadow-lg m-1' style={{backgroundColor:"yellow"}}>Yellow</button>

        <button onClick={() => setColor("blue")}
        className='outline-none px-4 p-y1 rounded-full text-white shadow-lg m-1' style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={() => setColor("orange")}
        className='outline-none px-4 p-y1 rounded-full text-black shadow-lg m-1' style={{backgroundColor:"orange"}}>orange</button>
        </div>
    </div>
  </div>
  )
}

export default App
