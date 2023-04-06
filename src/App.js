import { useState, useEffect } from 'react';

import Clock from './components/Clock/Clock';
import CurrentData from './components/CurrentData/CurrentData';
import Quote from './components/Quote/Quote';
import useIpServices from './services/IpServices';

import styles from './App.module.css';

function App() {
  const { getLocation } = useIpServices();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(null);
  const [city, setCity] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [timeZone, setTimeZone] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekOfYear, setWeekOfYear] = useState(null);
  const [onButtonClicked, setOnButtonClicked] = useState(false);

  const toggleButtonClick = () => {
    setOnButtonClicked(!onButtonClicked);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { city, countryCode, timezone } = await getLocation();
      setCity(city);
      setCountryCode(countryCode);
      setTimeZone(timezone);
    };
    fetchData();

    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    setCurrentTime(`${hours}:${minutes}`);

    let timeOfDay;
    if (hours < 6) {
      timeOfDay = 'night';
    } else if (hours < 12) {
      timeOfDay = 'morning';
    } else if (hours < 18) {
      timeOfDay = 'afternoon';
    } else {
      timeOfDay = 'evening';
    }
    setTimeOfDay(timeOfDay);

    const dayOfWeek = currentDate.getDay();
    setDayOfWeek(dayOfWeek);

    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = currentDate - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const weekOfYear = Math.floor(dayOfYear / 7);
    setDayOfYear(dayOfYear);
    setWeekOfYear(weekOfYear);
  }, [currentDate, currentTime]);

  return (
    <section className={styles.clockApp}>
      <div
        className={`${styles.bgContainer} ${
          timeOfDay === 'night' || timeOfDay === 'evening'
            ? styles.nightTime
            : styles.dayTime
        }`}
      >
        <div
          className={`${styles.mainClockContainer} ${
            onButtonClicked ? '' : styles.otherHeight
          }`}
        >
          {onButtonClicked && <Quote />}
          <Clock
            currentTime={currentTime}
            city={city}
            countryCode={countryCode}
            timeOfDay={timeOfDay}
            toggleButtonClick={toggleButtonClick}
            onButtonClicked={onButtonClicked}
          />
        </div>
      </div>
      {!onButtonClicked && (
        <CurrentData
          timeZone={timeZone}
          dayOfWeek={dayOfWeek}
          dayOfYear={dayOfYear}
          weekOfYear={weekOfYear}
          timeOfDay={timeOfDay}
        />
      )}
    </section>
  );
}

export default App;
