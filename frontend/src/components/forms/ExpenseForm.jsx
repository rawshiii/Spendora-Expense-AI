import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '../../services/api';

export default function ExpenseForm({
  onExpenseAdded,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const [receipt, setReceipt] =
    useState('');

  const uploadReceipt = async (
    e
  ) => {
    try {
      const formData =
        new FormData();

      formData.append(
        'receipt',
        e.target.files[0]
      );

      const res =
        await api.post(
          '/upload',
          formData
        );

      setReceipt(
        res.data.filePath
      );

      toast.success(
        'Receipt Uploaded'
      );
    } catch (error) {
      toast.error(
        'Upload Failed'
      );
    }
  };

  const onSubmit = async (
    data
  ) => {
    try {
      await api.post(
        '/expenses',
        {
          ...data,
          receipt,
        }
      );

      toast.success(
        'Expense Added Successfully'
      );

      reset();

      setReceipt('');

      onExpenseAdded?.();
    } catch (error) {
      toast.error(
        'Failed to Add Expense'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      shadow-sm
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Add Expense
      </h2>

      <div className="space-y-4">
        <input
          {...register('title')}
          placeholder="Expense Title"
          className="
          w-full
          p-4
          rounded-2xl
          border
          "
        />

        <input
          type="number"
          {...register('amount')}
          placeholder="Amount"
          className="
          w-full
          p-4
          rounded-2xl
          border
          "
        />

        <input
          type="date"
          {...register(
            'expenseDate'
          )}
          className="
          w-full
          p-4
          rounded-2xl
          border
          "
        />

        <select
          {...register(
            'category'
          )}
          className="
          w-full
          p-4
          rounded-2xl
          border
          "
        >
          <option value="Food">
            Food
          </option>

          <option value="Shopping">
            Shopping
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Bills">
            Bills
          </option>

          <option value="Entertainment">
            Entertainment
          </option>

          <option value="Health">
            Health
          </option>

          <option value="Investment">
            Investment
          </option>
        </select>

        <textarea
          {...register(
            'description'
          )}
          placeholder="Description"
          rows={4}
          className="
          w-full
          p-4
          rounded-2xl
          border
          "
        />

        <input
          type="file"
          accept="image/*"
          onChange={
            uploadReceipt
          }
          className="
          w-full
          p-3
          border
          rounded-2xl
          "
        />

        {receipt && (
          <div className="text-green-600 text-sm">
            Receipt uploaded ✓
          </div>
        )}

        <button
          type="submit"
          className="
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-[#4F6F52]
          to-[#739072]
          text-white
          font-semibold
          hover:scale-[1.02]
          transition-all
          "
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}