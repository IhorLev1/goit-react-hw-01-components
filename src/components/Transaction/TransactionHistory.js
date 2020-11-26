import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ children }) {
  return (
    <table className={s.container}>
      <thead>
        <tr>
          <th className={s.column}>Type</th>
          <th className={s.column}>Amount</th>
          <th className={s.column}>Currency</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}

TransactionHistory.PropTypes = {
  children: PropTypes.node,
};
