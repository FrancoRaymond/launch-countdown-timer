import React from 'react'

const Seconds = ({value}) => {
  return (
    <div className="font-bold px-4 py-6 bg-[#34364f] shadow-[0_20px_15px_rgba(0,0,0,0.4)] rounded-lg overflow-clip relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-black before:opacity-20 before:content-['']">
      <span className="text-[#f95d87]  text-3xl sm:text-6xl w-full before:absolute before:top-[46%] before:-left-[4px] before:w-[8px] before:h-[8px] before:rounded-full before:bg-[#181925] before:content-[''] after:absolute after:top-[46%] after:-right-[4px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#181925] after:content-['']">{value < 10 ? "0" + value : value}</span>
    </div>
  )
}

export default Seconds
