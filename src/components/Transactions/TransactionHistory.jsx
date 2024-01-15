import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <thead>
        <tr>
          <th className={css.cattegory}>Type</th>
          <th className={css.cattegory}>Amount</th>
          <th className={css.cattegory}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.values} key={item.id}>
            <td className={css.value}>{item.type}</td>
            <td className={css.value}>{item.amount}</td>
            <td className={css.value}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
