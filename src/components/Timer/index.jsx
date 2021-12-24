import { useState } from 'react';
import Countdown from 'react-countdown';
import swal from 'sweetalert';
import { useStateCompleted } from '../../Context';
import Gear from '../../images/gear.svg';
import Check from '../../images/check.svg';
import useTime from '../../hooks/useTime';

const Timer = () => {
  const { time, handleChange } = useTime({ mins: 0, secs: 0 });
  const [run, setRun] = useState(false);
  const [start, setStart] = useState('start');
  const [onConfig, setOnConfig] = useState(false);
  const { setCompleted } = useStateCompleted();

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes > 9 ? null : 0}
        {minutes} : {seconds > 9 ? null : 0}
        {seconds}
      </span>
    );
  };

  const calcTimeDelta = ({ minutes, seconds }) => {
    time.mins = minutes;
    time.secs = seconds;
  };

  const started = () => {
    setRun(!run);
    setStart(start === 'start' ? 'stop' : 'start');
    setOnConfig(false);
    setCompleted(false);
  };

  const settings = () => {
    setOnConfig(!onConfig);
    setRun(false);
    setStart('start');
    setCompleted(false);
  };

  const completeCountdown = () => {
    time.mins = 0;
    time.secs = 0;
    setCompleted(true);
    setTimeout(() => {
      swal('COMPLETED!');
    }, 100);
  };

  return (
    <div className="timer">
      {!run ? (
        <div className="time">
          <div className="minutes">
            <input
              type="number"
              name="mins"
              defaultValue={time.mins < 10 ? `0${time.mins}` : time.mins}
              onChange={handleChange}
              disabled={!onConfig}
              min="0"
              max="59"
            />
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input
              type="number"
              name="secs"
              defaultValue={time.secs < 10 ? `0${time.secs}` : time.secs}
              onChange={handleChange}
              disabled={!onConfig}
              min="0"
              max="59"
            />
          </div>
        </div>
      ) : (
        <div className="time">
          <Countdown
            date={Date.now() + (time.mins * 60000 + time.secs * 1000)}
            renderer={renderer}
            className="ProductCard__countdown__active"
            onTick={calcTimeDelta}
            onComplete={completeCountdown}
          />
        </div>
      )}
      <button type="button" className="start" onClick={started}>
        {start}
      </button>
      <button type="button" className="settings" onClick={settings}>
        <img src={Gear} alt="Settings" hidden={onConfig} />
        <img src={Check} alt="Settings" hidden={!onConfig} />
      </button>
    </div>
  );
};

export default Timer;
