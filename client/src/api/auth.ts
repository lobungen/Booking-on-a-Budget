const API = 'http://localhost:3001/api';

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const register = async (name: string, email: string, password: string) => {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

export const fetchExcursions = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/excursions`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch excursions');
  return res.json();
};

export const createExcursion = async (data: { title: string; location: string; description: string; price: string }) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/excursions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || 'Failed to create excursion');
  return result;
};
