import React, { useEffect, useRef, useState } from 'react';

import CountDownCard from './CountDownCard';

const CountDownTimer = () => {
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);
  const [days, setDays] = useState(Math.floor((new Date('April 18, 2025 13:00') - new Date()) / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor(((new Date('April 18, 2025 13:00') - new Date()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor(((new Date('April 18, 2025 13:00') - new Date()) % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor(((new Date('April 18, 2025 13:00') - new Date()) % (1000 * 60)) / 1000));

  useEffect(() => {
    seconds === 0 && setSeconds(59);
    minutes === 0 && setMinutes(59);
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        SecondsCardRef.current.classList.toggle('rotate');
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      MinutesCardRef.current.classList.toggle('rotate');
    }
  }, [seconds, minutes]);
  useEffect(() => {
    hours === 0 && setHours(23);
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current.classList.toggle('rotate');
    }
  }, [minutes, hours]);
  useEffect(() => {
    days === 14 && setDays(13);
    hours === 0 &&
      setDays(days - 1) &&
      DaysCardRef.current.classList.toggle('rotate');
  }, [hours, days]);
  return (
    <div className="countdown__container">
      <CountDownCard
        label="days"
        number={days}
        cardRef={DaysCardRef}
      />
      <CountDownCard
        label="hours"
        number={hours}
        cardRef={HoursCardRef}
      />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;
