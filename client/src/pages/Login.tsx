import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      loginUser(res.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md rounded px-6 py-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Login
        </h2>

        <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-3 mb-4 w-full rounded dark:bg-gray-700 dark:text-white"
        />

        <label htmlFor="password" className="block mb-1 text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-3 mb-4 w-full rounded dark:bg-gray-700 dark:text-white"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-semibold"
          type="submit"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;

