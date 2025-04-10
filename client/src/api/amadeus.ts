const API = 'http://localhost:3001/api';

export const searchCity = async (keyword: string) => {
  const res = await fetch(`${API}/amadeus/cities?keyword=${encodeURIComponent(keyword)}`);
  if (!res.ok) throw new Error('Failed to fetch cities');
  return res.json();
};
