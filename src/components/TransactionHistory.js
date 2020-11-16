import React from 'react';
import PropTypes from 'prop-types';
import styles from './module.css/Transaction.module.css';

export default function TransactionHistory({ children }) {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th className={styles.column}>Type</th>
          <th className={styles.column}>Amount</th>
          <th className={styles.column}>Currency</th>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </table>
  );
}

TransactionHistory.PropTypes = {
  children: PropTypes.node,
};
