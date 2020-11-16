import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import styles from './module.css/Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionName}> {title} </h2>
      <ul className={styles.statisticBlock}>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemText}> {stats[0].label} </span>
          <span className={styles.statisticItemPercente}>
            {stats[0].percentage} %
          </span>
        </li>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemText}> {stats[1].label} </span>
          <span className={styles.statisticItemPercente}>
            {stats[1].percentage} %
          </span>
        </li>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemText}> {stats[2].label} </span>
          <span className={styles.statisticItemPercente}>
            {stats[2].percentage} %
          </span>
        </li>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemText}> {stats[3].label} </span>
          <span className={styles.statisticItemPercente}>
            {stats[3].percentage} %
          </span>
        </li>
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: 'STATS',
};

Statistics.PropTypes = {
  title: string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: string.isRequired,
      label: string.isRequired,
      percentage: number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
