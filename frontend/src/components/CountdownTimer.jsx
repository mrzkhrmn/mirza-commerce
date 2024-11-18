import React, { useState, useEffect } from "react";
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col font-semibold">
        <span className="text-sm uppercase">Days</span>
        <span className="text-4xl">{timeLeft.days}</span>
      </div>
      <span className="text-3xl text-primary-color mt-4">:</span>
      <div className="flex flex-col font-semibold">
        <span className="text-sm uppercase">Hours</span>
        <span className="text-4xl">{timeLeft.hours}</span>
      </div>
      <span className="text-3xl text-primary-color mt-4">:</span>
      <div className="flex flex-col font-semibold">
        <span className="text-sm uppercase">Minutes</span>
        <span className="text-4xl">{timeLeft.minutes}</span>
      </div>
      <span className="text-3xl text-primary-color mt-4">:</span>
      <div className="flex flex-col font-semibold">
        <span className="text-sm uppercase">Seconds</span>
        <span className="text-4xl">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};
export default CountdownTimer;
