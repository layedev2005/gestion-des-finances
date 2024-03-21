import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    const transaction = {
      description,
      amount: parseFloat(amount)
    };
    onAddTransaction(transaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full px-4 py-2 mb-2 text-gray-800 placeholder-gray-500 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value )}
        className="block w-full px-4 py-2 mb-2 text-gray-800 placeholder-gray-500 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="block w-300  px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Ajouter une transaction
      </button>
    </form>
  );
}

export default TransactionForm;
