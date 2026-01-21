import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChanger from './components/BgChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-blue-950'>
         <BgChanger/>
      </div>
    </>
  )
}

export default App
