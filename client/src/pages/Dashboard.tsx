import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:3001/api';

const Dashboard = () => {
  const [excursions, setExcursions] = useState([]);
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

  const handleDelete = async (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this excursion?');
    if (!confirmed) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API}/excursions/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert('Excursion deleted');
        fetchExcursions(); // refresh list
      } else {
        alert('Failed to delete excursion');
      }
    } catch (err) {
      alert('Server error');
    }
  };

  useEffect(() => {
    fetchExcursions();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
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
                  onClick={() => handleDelete(trip.id)}
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
  );
};

export default Dashboard;
