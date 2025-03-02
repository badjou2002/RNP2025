import React from 'react';
import './css/app.css';
import CountDownTimer from './components/CountDownTimer';

const CountDown = () => {
  return (
    <div className="app-container">
      <div className="container">
        <main>
          <CountDownTimer />
        </main>
      </div>
    </div>
  );
};

export default CountDown;
