import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const popularCities = [
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Bangkok', lat: 13.7563, lng: 100.5018 }
];

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
      const imageUrl = data.results?.[0]?.urls?.small;
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
        } catch (err) {
          results[city.name] = [];
        }
      }

      setCitySpots(results);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🌍 Booking on a Budget</h1>
      <p className="mb-6 text-gray-700">Explore the most visited cities of the last 3 months with top tourist spots.</p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularCities.map(city => (
            <div key={city.name} className="border rounded-lg p-4 shadow bg-white animate-pulse h-52"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularCities.map(city => (
            <div
              key={city.name}
              className="border rounded-lg p-4 shadow bg-white hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                localStorage.setItem('selectedCity', city.name);
                localStorage.setItem('selectedCityLat', String(city.lat));
                localStorage.setItem('selectedCityLng', String(city.lng));
                localStorage.setItem('selectedCityImage', images[city.name] || '');
                navigate('/details');
              }}
            >
              {images[city.name] && (
                <img src={images[city.name]} alt={city.name} className="w-full h-32 object-cover rounded mb-2" />
              )}
              <h2 className="text-xl font-semibold mb-2">{city.name}</h2>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                {(citySpots[city.name] || []).map((spot: any, idx: number) => (
                  <li key={idx}>{spot.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
