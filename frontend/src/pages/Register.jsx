import { useForm } from 'react-hook-form';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Register() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
  try {
    await api.post('/auth/register', data);

    toast.success('Account Created');

    navigate('/login');
  } catch (error) {
    toast.error('Registration failed');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 blur-[140px] rounded-full" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-2 text-white">
          Create Account
        </h1>

        <p className="text-slate-400 mb-8">
          Start tracking your finances beautifully.
        </p>

        <div className="space-y-4">
          <input
            {...register('name')}
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
          />

          <input
            {...register('email')}
            placeholder="Email"
            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
          />

          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-slate-800 text-white"
          />

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white hover:scale-[1.02] transition">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}