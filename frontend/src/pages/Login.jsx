import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';

import toast from 'react-hot-toast';

import api from '../services/api';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/auth/login', data);

      localStorage.setItem('token', res.data.token);

      toast.success('Welcome back!');

      navigate('/');
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 blur-[140px] rounded-full" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-slate-400 mb-8">
          Login to continue tracking finances.
        </p>

        <div className="space-y-4">
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

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-[1.02] transition">
            Login
          </button>

          <p className="text-center text-slate-400 mt-4">
            Don’t have an account?{' '}
            <Link
              to="/register"
              className="text-pink-400"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}