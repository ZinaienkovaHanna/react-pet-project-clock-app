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
          <img src="/images/desktop/icon-sun.svg" alt="refresh" />
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
        {onButtonClicked ? (
          <>
            <span>more</span> <div className={styles.arrowDown}></div>
          </>
        ) : (
          <>
            <span>less</span> <div className={styles.arrowUp}></div>
          </>
        )}
      </button>
    </div>
  );
};

export default Clock;
