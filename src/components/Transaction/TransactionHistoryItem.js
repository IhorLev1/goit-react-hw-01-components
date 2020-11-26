import React from 'react';
import PropTypes, { string, number, arrayOf } from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ items }) {
  return items.map(item => (
    <tr key={item.id}>
      <td className={s.tableItem}>{item.type}</td>
      <td className={s.tableItem}>{item.amount}</td>
      <td className={s.tableItem}>{item.currency}</td>
    </tr>
  ));
}

TransactionHistory.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: number.isRequired,
      type: string.isRequired,
      amount: number.isRequired,
      currency: string,
    }),
  ).isRequired,
};
