import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function DealCountDown({ endDate='23-09-2022' }) {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      const countDown = moment(endDate - now);

      const days = countDown.format('D');
      const hours = countDown.format('HH');
      const minutes = countDown.format('mm');
      const seconds = countDown.format('ss');

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="countdown">
      <div className="timer"> <span className="num-counter">{time.days}</span> <span>Days</span></div>
      <div className="timer"> <span className="num-counter">{time.hours}</span> <span>Hrs</span></div>
      <div className="timer"> <span className="num-counter">{time.minutes}</span> <span>Min</span></div>
      <div className="timer"> <span className="num-counter">{time.seconds}</span> <span>Sec</span></div>
    </div>
  );
}

DealCountDown.propTypes = {
  endDate: PropTypes.object.isRequired,
};

export default DealCountDown;
