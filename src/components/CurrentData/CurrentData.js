import React from 'react';

import styles from './CurrentData.module.css';

const CurrentData = ({
  timeZone,
  dayOfWeek,
  dayOfYear,
  weekOfYear,
  timeOfDay,
}) => {
  return (
    <div
      className={`${styles.currentDataContainer} ${
        timeOfDay === 'night' || timeOfDay === 'evening'
          ? styles.nightTime
          : styles.dayTime
      }`}
    >
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <h6>CURRENT TIMEZONE</h6>
          <h2>{timeZone}</h2>

          <h6>Day of the year</h6>
          <h2>{dayOfYear}</h2>

          <h6>Day of the week</h6>
          <h2>{dayOfWeek}</h2>

          <h6>Week number</h6>
          <h2>{weekOfYear}</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentData;
