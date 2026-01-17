import React, { useState } from 'react'
import { motion } from "framer-motion"
const App = () => {
  const [count, setCount] = useState(0);
  const IncreaseValue = () => setCount(prev => prev +1);
  const DecreaseValue = () => setCount(prev => prev -1);
  return (
    <div className='w-full h-screen flex items-center  justify-center  '> 
      <div className='w-100 h-100  bg-sky-500 px-10 py-5 rounded-2xl shadow-2xl flex gap-30 flex-col'>

        <div className='w-full px-10 py-5 rounded-2xl text-2xl bg-gray-50 text-center text-gray-700 shadow-inner font-bold border-2 border-amber-50'>
          <h1>{count}</h1>
        </div>

        <div className=' w-full px-6 py-4 text-gray-700 flex justify-around gap-5 -translate-6'>
          <button onClick={IncreaseValue}  className='bg-white hover:bg-gray-100  shadow  px-10 py-3 rounded-2xl  transition-all duration-300 font-bold tracking-wider hover:scale-105   cursor-pointer'>Increase</button>
          <button onClick={DecreaseValue} className='bg-white  hover:bg-gray-100  shadow  px-10 py-3 rounded-2xl  transition-all duration-300 font-bold tracking-wider hover:scale-105   cursor-pointer'>Decrease</button>
        </div>
      </div>
    </div>
  )
}

export default App
