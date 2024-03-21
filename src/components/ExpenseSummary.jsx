import React from 'react';

function ExpenseSummary({ expenses }) {
  // Calcul de la somme totale des dépenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-bold">Résumé des dépenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="mb-2">
            {expense.description} - {expense.amount}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold">Total des dépenses : {totalExpenses}</p>
    </div>
  );
}

export default ExpenseSummary;
