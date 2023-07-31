import { useState } from "react";
function DigitalClock() {
  let time = new Date().toLocaleTimeString();
  const [timeValue, setTimeValue] = useState(time);
  let year = new Date().getFullYear();
  let day = new Date().getDate();
  const month1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = month1[d.getMonth()];

  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = weekDays[dayIndex];

  function Time() {
    let time = new Date().toLocaleTimeString();
    setTimeValue(time);
  }
  setInterval(Time, 1000);
  return (
    <div className="main animate__animated animate__rollIn">
      <div className="card">
        <div className="header">
          <h2>{currentDay}</h2>
        </div>
        <div className="body">
          <h1>{time}</h1>
        </div>
        <div className="footer">
          <p>{day}</p>
          <p>{month}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
