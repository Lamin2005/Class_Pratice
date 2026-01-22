import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConveter from './components/CurrencyConveter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-blue-950'>
         <CurrencyConveter/>
      </div>
    </>
  )
}

export default App
