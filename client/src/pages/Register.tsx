import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import AuthLayout from '../components/AuthLayout';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          Register
        </h2>

        <label htmlFor="name" className="block mb-1 text-gray-700 dark:text-gray-200">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          className="border p-3 mb-4 w-full rounded dark:bg-gray-700 dark:text-white"
        />

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
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-3 mb-4 w-full rounded dark:bg-gray-700 dark:text-white"
        />

        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full font-semibold" type="submit">
          Register
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;

