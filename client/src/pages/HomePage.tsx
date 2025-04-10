import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const popularCities = [
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Bangkok', lat: 13.7563, lng: 100.5018 },
  { name: 'Barcelona', lat: 41.3851, lng: 2.1734 }
];

const CITY_BUDGETS = {
  Paris: '$70–150/day',
  'New York': '$100–200/day',
  Tokyo: '$60–120/day',
  Rome: '$50–100/day',
  Bangkok: '$30–70/day',
  Barcelona: '$50–90/day'
};

const API = 'http://localhost:3001';
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [citySpots, setCitySpots] = useState<any>({});
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const fetchImage = async (city: string) => {
    if (images[city]) return;
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await res.json();
      const imageUrl = data.results?.[0]?.urls?.regular;
      setImages((prev) => ({ ...prev, [city]: imageUrl }));
    } catch {
      setImages((prev) => ({ ...prev, [city]: '' }));
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const results: any = {};

      for (const city of popularCities) {
        fetchImage(city.name);
        try {
          const res = await fetch(`${API}/api/amadeus/pois?lat=${city.lat}&lng=${city.lng}&category=tourism.sights`);
          const data = await res.json();
          results[city.name] = data.data.slice(0, 3);
        } catch {
          results[city.name] = [];
        }
      }

      setCitySpots(results);
      setLoading(false);
    };

    fetchAll();
  }, []);

  const mockSpotBudget = () => {
    const min = Math.floor(Math.random() * 10 + 10); // 10–20
    const max = min + Math.floor(Math.random() * 30 + 10); // +10–40
    return `$${min}–${max}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">🌍 Booking on a Budget</h1>
      <p className="mb-10 text-center text-gray-700 dark:text-gray-300 text-lg">
        Explore the most visited cities of the last 3 months with top tourist spots and cost estimates.
      </p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCities.map(city => (
            <div key={city.name} className="bg-white shadow rounded-lg h-60 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCities.map(city => (
            <div
              key={city.name}
              className="border rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-transform hover:scale-[1.02] cursor-pointer"
              onClick={() => {
                localStorage.setItem('selectedCity', city.name);
                localStorage.setItem('selectedCityLat', String(city.lat));
                localStorage.setItem('selectedCityLng', String(city.lng));
                localStorage.setItem('selectedCityImage', images[city.name] || '');
                navigate('/details');
              }}
            >
              {images[city.name] && (
                <img
                  src={images[city.name]}
                  alt={city.name}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-1">{city.name}</h2>
                <p className="text-sm text-gray-600 mb-3">💰 Est. Budget: {CITY_BUDGETS[city.name as keyof typeof CITY_BUDGETS]}</p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  {(citySpots[city.name] || []).map((spot: any, idx: number) => (
                    <li key={idx}>
                      <span className="font-medium">{spot.name}</span>
                      <span className="text-gray-500 ml-1">({mockSpotBudget()})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
