import { useState } from 'react';
import toast from 'react-hot-toast';

import api from '../../services/api';

export default function EditExpenseModal({
  expense,
  onClose,
  refreshExpenses,
}) {
  const [form, setForm] =
    useState(expense);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const saveExpense =
    async () => {
      try {
        await api.put(
          `/expenses/${expense._id}`,
          form
        );

        toast.success(
          'Expense Updated'
        );

        refreshExpenses();

        onClose();
      } catch (error) {
        toast.error(
          'Update Failed'
        );
      }
    };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-3xl w-[450px]">
        <h2 className="text-2xl font-bold mb-4">
          Edit Expense
        </h2>

        <div className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            value={
              form.description
            }
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <div className="flex gap-3">
            <button
              onClick={
                saveExpense
              }
              className="flex-1 py-3 bg-[#5F7A61] text-white rounded-xl"
            >
              Save
            </button>

            <button
              onClick={onClose}
              className="flex-1 py-3 border rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}