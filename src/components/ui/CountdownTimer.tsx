import React, { useState, useEffect, memo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(
      `${new Date().getFullYear() + 1}-12-31T00:00:00`
    );
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents: JSX.Element[] = [];

  const intervals: (keyof TimeLeft)[] = ["days", "hours", "minutes", "seconds"];
  intervals.forEach((interval, index) => {
    const value = timeLeft[interval];
    const nextValues = intervals.slice(index + 1).map((i) => timeLeft[i]);
    if (value > 0 || nextValues.some((val) => val > 0)) {
      timerComponents.push(
        <div className="timer" key={interval}>
          <div className="date">
            <span className="num">{value}</span>{" "}
            <span className="name">{interval}</span>
            {index < intervals.length - 1 &&
            nextValues.some((val) => val > 0) ? (
              <span className="dot"> : </span>
            ) : null}
          </div>
        </div>
      );
    }
  });

  console.log("rendering time");

  return (
    <div className="d-flex">
      {timerComponents.length ? timerComponents : <span>الوقت انتهى!</span>}
    </div>
  );
};

export default memo(CountdownTimer);
