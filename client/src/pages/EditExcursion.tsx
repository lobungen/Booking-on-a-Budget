import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API = 'http://localhost:3000/api';

const EditExcursion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    location: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${API}/excursions/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch(`${API}/excursions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    alert('Excursion updated!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 mx-auto">
      <h2 className="text-xl mb-4">Edit Excursion</h2>
      <input className="border p-2 mb-2 w-full" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input className="border p-2 mb-2 w-full" name="location" value={form.location} onChange={handleChange} placeholder="Location" />
      <textarea className="border p-2 mb-2 w-full" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input className="border p-2 mb-2 w-full" name="price" value={form.price} onChange={handleChange} placeholder="Price" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Update</button>
    </form>
  );
};

export default EditExcursion;
