import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      localStorage.setItem('token', res.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="border p-2 mb-2 w-full" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 mb-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit">Login</button>
    </form>
  );
};

export default Login;
