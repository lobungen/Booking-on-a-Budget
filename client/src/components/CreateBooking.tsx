import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooking = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    userEmail: '',
    spotName: '',
    reservationDate: '',
    spending: '',
    excursionId: '', // Added excursionId field
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      const response = await axios.post(
        'http://localhost:3001/api/bookings', 
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token for authentication
          },
        }
      );
      console.log('Booking created:', response.data);
      navigate('/dashboard'); // Redirect to the dashboard after successful booking
    } catch (err) {
      console.error('Error creating booking:', err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Create a Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="userId" 
          value={formData.userId} 
          onChange={handleChange} 
          placeholder="User ID" 
          className="input"
        />
        <input 
          type="text" 
          name="userName" 
          value={formData.userName} 
          onChange={handleChange} 
          placeholder="User Name" 
          className="input"
        />
        <input 
          type="email" 
          name="userEmail" 
          value={formData.userEmail} 
          onChange={handleChange} 
          placeholder="User Email" 
          className="input"
        />
        <input 
          type="text" 
          name="spotName" 
          value={formData.spotName} 
          onChange={handleChange} 
          placeholder="Spot Name" 
          className="input"
        />
        <input 
          type="date" 
          name="reservationDate" 
          value={formData.reservationDate} 
          onChange={handleChange} 
          className="input"
        />
        <input 
          type="text" 
          name="spending" 
          value={formData.spending} 
          onChange={handleChange} 
          placeholder="Spending" 
          className="input"
        />
        <input 
          type="text" 
          name="excursionId" 
          value={formData.excursionId} 
          onChange={handleChange} 
          placeholder="Excursion ID" 
          className="input"
        />
        <button type="submit" className="btn">Create Booking</button>
      </form>
    </div>
  );
};

export default CreateBooking;
