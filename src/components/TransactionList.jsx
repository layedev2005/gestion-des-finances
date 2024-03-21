import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-bold">Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2">
            {transaction.description} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
