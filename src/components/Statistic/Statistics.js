import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.container}>
      <h2 className={s.sectionName}> {title} </h2>
      <ul className={s.statisticBlock}>
        <li className={s.statisticItem}>
          <span className={s.statisticItemText}> {stats[0].label} </span>
          <span className={s.statisticItemPercente}>
            {stats[0].percentage} %
          </span>
        </li>
        <li className={s.statisticItem}>
          <span className={s.statisticItemText}> {stats[1].label} </span>
          <span className={s.statisticItemPercente}>
            {stats[1].percentage} %
          </span>
        </li>
        <li className={s.statisticItem}>
          <span className={s.statisticItemText}> {stats[2].label} </span>
          <span className={s.statisticItemPercente}>
            {stats[2].percentage} %
          </span>
        </li>
        <li className={s.statisticItem}>
          <span className={s.statisticItemText}> {stats[3].label} </span>
          <span className={s.statisticItemPercente}>
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
