import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:3001/api';

const Dashboard = () => {
  const [excursions, setExcursions] = useState([]);
  const [savedSpots, setSavedSpots] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const navigate = useNavigate();

  const fetchExcursions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API}/excursions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setExcursions(data);
    } catch (err) {
      console.error('Error fetching excursions:', err);
    }
  };

  useEffect(() => {
    fetchExcursions();
    const stored = JSON.parse(localStorage.getItem('savedSpots') || '[]');
    setSavedSpots(stored);

    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings);
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-10">
      {/* ✈️ Excursions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Excursions</h2>
        {excursions.length === 0 ? (
          <p className="text-gray-600">No excursions found.</p>
        ) : (
          <ul className="space-y-4">
            {excursions.map((trip: any) => (
              <li
                key={trip.id}
                className="border border-gray-300 p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg">{trip.title}</h3>
                  <p className="text-gray-700">{trip.location}</p>
                  <p className="text-gray-600">{trip.description}</p>
                  <p className="text-sm text-blue-700 font-semibold mt-1">${trip.price}</p>
                </div>
                <div className="flex space-x-2 mt-4 sm:mt-0 sm:self-center">
                  <button
                    onClick={() => navigate(`/edit/${trip.id}`)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => alert('Delete functionality here')}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ⭐ Saved Spots */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">⭐ Saved Spots</h2>
        {savedSpots.length === 0 ? (
          <p className="text-gray-500">You haven’t saved any spots yet.</p>
        ) : (
          <ul className="space-y-4">
            {savedSpots.map((spot, index) => (
              <li
                key={index}
                onClick={() => navigate('/spot', { state: spot })}
                className="border p-4 rounded shadow bg-white hover:bg-gray-100 cursor-pointer"
              >
                <h4 className="font-semibold">{spot.name}</h4>
                {spot.address && <p className="text-sm text-gray-600">{spot.address}</p>}
                {spot.category && <p className="text-sm text-gray-500 italic">{spot.category}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 📅 Booking History */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">📅 Booking History</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500">No bookings made yet.</p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking, index) => (
              <li key={index} className="border p-4 rounded shadow bg-white">
                <h4 className="font-semibold">{booking.name}</h4>
                <p className="text-sm text-gray-600">📍 {booking.address}</p>
                <p className="text-sm text-gray-500 italic">{booking.category}</p>
                <p className="text-sm text-blue-700 mt-1">📅 Reserved: {new Date(booking.date).toDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
