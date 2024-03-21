import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExpenseSummary from './components/ExpenseSummary';
import { Router, Route } from 'react-router-dom';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Gestionnaire de finances</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <ExpenseSummary expenses={transactions} />
      <TransactionList transactions={transactions} />

      
    </div>

  );
}

export default App;
