import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:3001';

const CATEGORY_MAP = {
  sights: 'tourism.sights',
  restaurants: 'catering.restaurant',
  museums: 'entertainment.museum',
  parks: 'leisure.park',
};

const CityDetails = () => {
  const city = localStorage.getItem('selectedCity') || '';
  const image = localStorage.getItem('selectedCityImage') || '';
  const lat = localStorage.getItem('selectedCityLat');
  const lng = localStorage.getItem('selectedCityLng');

  const [spots, setSpots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof CATEGORY_MAP>('sights');

  const navigate = useNavigate();

  const fetchSpots = async () => {
    if (!lat || !lng) return;
    try {
      setLoading(true);
      const res = await fetch(
        `${API}/api/amadeus/pois?lat=${lat}&lng=${lng}&category=${CATEGORY_MAP[selectedCategory]}`
      );
      const data = await res.json();
      setSpots(data.data || []);
    } catch (err) {
      console.error('Error fetching spots', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, [selectedCategory]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button onClick={() => navigate('/search')} className="text-blue-500 mb-4">
        ← Back to search
      </button>
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      {image && <img src={image} alt={city} className="w-full h-64 object-cover rounded mb-4" />}

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-1">💰 Typical Daily Budget</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Budget: $30–50/day</li>
          <li>Mid-range: $70–120/day</li>
          <li>High-end: $150+/day</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">📍 Popular Spots</h3>

        <div className="flex space-x-2 mb-4">
          {Object.entries(CATEGORY_MAP).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as keyof typeof CATEGORY_MAP)}
              className={`px-3 py-1 rounded-full text-sm border ${
                selectedCategory === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading {selectedCategory}...</p>
        ) : (
          <ul className="space-y-2">
            {spots.map((spot, index) => (
              <li key={index} className="border p-3 rounded-lg shadow bg-white">
                <strong className="block text-lg font-semibold">{spot.name}</strong>
                {spot.address && (
                  <p className="text-sm text-gray-600">📍 {spot.address}</p>
                )}
                {spot.category && (
                  <p className="text-xs italic text-gray-500 mt-1">
                    {spot.category.replace('.', ' › ')}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
        {spots.length === 0 && !loading && (
          <p className="text-gray-500 mt-2">No {selectedCategory} found for this city.</p>
        )}
      </div>

      <button
        onClick={() => navigate('/create')}
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded w-full"
      >
        Plan Excursion Here
      </button>
    </div>
  );
};

export default CityDetails;
