import React from 'react';
import ExpenseSummary from '../components/ExpenseSummary';

function ExpenseSummaryPage({ expenses }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Résumé des dépenses</h1>
      <ExpenseSummary expenses={expenses} />
    </div>
  );
}

export default ExpenseSummaryPage;
