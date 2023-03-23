import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const countDownDate = new Date('3 22, 2023 23:00:00').getTime();
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const countdownfunction = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(countdownfunction);
        setCountdownFinished(true);
        setDays('0');
        setHours('0');
        setMinutes('0');
        setSeconds('0');
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      }
    }, 1000);

    return () => clearInterval(countdownfunction);
  }, [countDownDate]);

  return (
    <div id="demo" className='bg-green-200'>
      <span className='text-gray-800'>Hello Dear, I have make big discount for all my servises 50% <span className='font-bold'>BEFORE </span></span>
      {countdownFinished ? (
        <span> Sorry Time Over!</span>
      ) : (
        <div className=' md:text-3xl text-blue-500 '>
          {days}d <b>:</b> {hours}h <b>:</b> {minutes}m <b>:</b> {seconds}s
        </div>
      )}
    </div>
  );
};

export default CountDown;
