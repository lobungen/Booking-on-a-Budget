// src/api/auth.ts
const API = 'http://localhost:3001/api';

export const createExcursion = async (data: {
  title: string;
  location: string;
  description: string;
  price: string;
}) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found. Please log in again.');
  }

  const res = await fetch(`${API}/excursions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errMsg = await res.json();
    throw new Error(errMsg.message || 'Failed to create excursion');
  }

  return res.json();
};
