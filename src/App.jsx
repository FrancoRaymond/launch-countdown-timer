import React from 'react'
import Timeremaining from './components/Timeremaining'
import facebook from './assets/images/icon-facebook.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instagram from './assets/images/icon-instagram.svg'

function App() {

  return (
    <div className='home min-h-screen flex flex-col items-center justify-around px-2'>
      <h1 className='text-white font-semibold text-2xl px-12 text-center'>WE'RE LAUNCHING SOON</h1>
      <Timeremaining />
      <div className='flex gap-5 z-20'>
        <img src={facebook} alt="" className='cursor-pointer'/>
        <img src={pinterest} alt="" className='cursor-pointer'/>
        <img src={instagram} alt="" className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default App
