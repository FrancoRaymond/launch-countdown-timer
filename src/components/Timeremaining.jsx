import React from 'react'
import Days from './Days'
import Hours from './Hours'
import Minutes from './Minutes'
import Seconds from './Seconds'

const Timeremaining = () => {
  return (
    <div className='flex  gap-5'>
        <div className='flex flex-col items-center gap-1'>
          <Days />
          <span className='text-[11px] text-gray-300 font-semibold'>DAYS</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Hours />
          <span className='text-[11px] text-gray-300 font-semibold'>HOURS</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Minutes />
          <span className='text-[11px] text-gray-300 font-semibold'>MINUTES</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Seconds />
          <span className='text-[11px] text-gray-300 font-semibold'>SECONDS</span>
        </div> 
    </div>
  )
}

export default Timeremaining