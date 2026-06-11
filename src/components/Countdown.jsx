import React, { useState, useEffect } from 'react';
import './Countdown.css';

const TARGET_DATE = new Date('2026-09-11T18:00:00+05:30').getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrap float-1">
      <div className="cd-item">
        <div className="cd-value">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="cd-label">Days</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-item">
        <div className="cd-value">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="cd-label">Hours</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-item">
        <div className="cd-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="cd-label">Mins</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-item">
        <div className="cd-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="cd-label">Secs</div>
      </div>
    </div>
  );
}
