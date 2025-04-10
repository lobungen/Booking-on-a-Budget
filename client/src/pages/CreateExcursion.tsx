import { useState } from 'react';
import { createExcursion } from '../api/auth';

const CreateExcursion = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(() => {
    const stored = localStorage.getItem('selectedCity');
    localStorage.removeItem('selectedCity');
    return stored || '';
  });
  const [image, setImage] = useState(() => {
    const storedImage = localStorage.getItem('selectedCityImage');
    localStorage.removeItem('selectedCityImage');
    return storedImage || '';
  });
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🔐 JWT token:', localStorage.getItem('token'));
    try {
      await createExcursion({ title, location, description, price });
      alert('Excursion created!');
      setTitle('');
      setLocation('');
      setImage('');
      setDate('');
      setDescription('');
      setPrice('');
    } catch (err: any) {
      alert(`Error: ${err.message}. Please make sure you are logged in.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl mb-4">Create New Excursion</h2>
      {image && <img src={image} alt="Selected city" className="w-full h-40 object-cover rounded mb-4" />}
      <input className="border p-2 mb-2 w-full" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input className="border p-2 mb-2 w-full" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
      <input className="border p-2 mb-2 w-full" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <textarea className="border p-2 mb-2 w-full" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <input className="border p-2 mb-2 w-full" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
      <button className="bg-purple-500 text-white px-4 py-2 rounded w-full" type="submit">Create</button>
    </form>
  );
};

export default CreateExcursion;
