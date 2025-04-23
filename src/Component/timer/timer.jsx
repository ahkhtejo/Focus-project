import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // cleanup
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function formatDate() {
    return time.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return (
    <>
      <div className=" font-mono text-center ">{formatTime()}</div>
      <p className="font-mono text-center text-sm text-gray-400 mt-2">
        {formatDate()}
      </p>
    </>
  );
}
