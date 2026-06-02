import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';

import api from '../../services/api';

export default function GoalForm({
  refreshGoals,
}) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/goals', data);

      toast.success(
        'Goal Created!'
      );

      reset();

      refreshGoals();
    } catch (error) {
      toast.error(
        'Failed to create goal'
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        Create Goal
      </h2>

      <div className="space-y-4">
        <input
          {...register('title')}
          placeholder="Goal Name"
          className="w-full p-4 rounded-2xl border"
        />

        <input
          type="number"
          {...register(
            'targetAmount'
          )}
          placeholder="Target Amount"
          className="w-full p-4 rounded-2xl border"
        />

        <button
          className="
          w-full
          py-4
          rounded-2xl
          bg-[#4F6F52]
          text-white
          "
        >
          Create Goal
        </button>
      </div>
    </form>
  );
}