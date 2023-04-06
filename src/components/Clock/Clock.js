import React from 'react';

import styles from './Clock.module.css';

const Clock = ({
  currentTime,
  city,
  countryCode,
  timeOfDay,
  toggleButtonClick,
  onButtonClicked,
}) => {
  return (
    <div className={styles.clockContainer}>
      <div>
        <div className={styles.timeOfDay}>
          {timeOfDay === 'evening' || timeOfDay === 'night' ? (
            <img src="/images/desktop/icon-moon.svg" alt="refresh" />
          ) : (
            <img src="/images/desktop/icon-sun.svg" alt="refresh" />
          )}
          <h4>Good {timeOfDay}</h4>
        </div>
        <h1>
          {currentTime}
          <span>bst</span>
        </h1>
        <h3>
          in {city}, {countryCode}
        </h3>
      </div>

      <button onClick={toggleButtonClick}>
        <span>{!onButtonClicked ? 'more' : 'less'}</span>
        <div className={styles.circle}>
          <div
            className={`${styles.arrow} ${
              !onButtonClicked ? styles.down : styles.up
            }`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default Clock;
