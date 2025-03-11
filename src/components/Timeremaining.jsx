import React,{ useState, useEffect } from 'react'
import Days from './Days'
import Hours from './Hours'
import Minutes from './Minutes'
import Seconds from './Seconds'

const Timeremaining = () => {

  const [targetInput, setTargetInput] = useState("");
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    const userInput = prompt("Enter your target date (e.g 2025-07-07): ");
    if (userInput) {
      setTargetInput(userInput);
    }
  }, []);

  useEffect(() => {
    if (targetInput) {
      const timestamp = new Date(`${targetInput}T00:00:00`).getTime();
      if (!isNaN(timestamp)) {
        setTargetDate(timestamp);
      } else {
        alert("Invalid date format! Please refresh and try again.");
      }
    }
  }, [targetInput]);

  const calculateTimeLeft = () => {
    if (!targetDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    if (!targetDate) return;

    setTimeLeft(calculateTimeLeft()); 

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, [targetDate]);

  return (
    <div className='flex  gap-5'>
        <div className='flex flex-col items-center gap-1'>
          <Days value={timeLeft.days}/>
          <span className='text-[11px] text-gray-300 font-semibold'>DAYS</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Hours value={timeLeft.hours}/>
          <span className='text-[11px] text-gray-300 font-semibold'>HOURS</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Minutes value={timeLeft.minutes}/>
          <span className='text-[11px] text-gray-300 font-semibold'>MINUTES</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Seconds value={timeLeft.seconds}/>
          <span className='text-[11px] text-gray-300 font-semibold'>SECONDS</span>
        </div> 
    </div>
  )
}

export default Timeremaining