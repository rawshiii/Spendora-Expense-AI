import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import api from '../../services/api';

export default function BudgetForm({
  refreshBudgets,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post(
        '/budgets',
        {
          ...data,
          limit: Number(
            data.limit
          ),
        }
      );

      toast.success(
        'Budget Created!'
      );

      reset();

      refreshBudgets?.();
    } catch (error) {
      console.log(
        error.response?.data
      );

      toast.error(
        error.response?.data
          ?.message ||
          'Budget creation failed'
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
        Create Budget
      </h2>

      <div className="space-y-4">
        <select
          {...register(
            'category'
          )}
          className="
          w-full
          p-4
          rounded-2xl
          border
          border-[#D1D5DB]
          "
        >
          <option value="Food">
            Food
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Shopping">
            Shopping
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

        <input
          type="number"
          {...register(
            'limit'
          )}
          placeholder="Budget Limit"
          className="
          w-full
          p-4
          rounded-2xl
          border
          border-[#D1D5DB]
          "
        />

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
          "
        >
          Save Budget
        </button>
      </div>
    </form>
  );
}