import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchCity } from '../api/amadeus';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const SearchCity = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchImage = async (cityName: string) => {
    if (images[cityName]) return;
    try {
      const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(cityName)}&client_id=${UNSPLASH_ACCESS_KEY}`);
      const data = await res.json();
      const imageUrl = data.results?.[0]?.urls?.small;
      setImages((prev) => ({ ...prev, [cityName]: imageUrl }));
    } catch {
      setImages((prev) => ({ ...prev, [cityName]: '' }));
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    setLoading(true);
    setError('');
    setImages({});
    try {
      const data = await searchCity(keyword);
      console.log('City Search Data:', data); // Debug log to verify results
      setResults(data.data || []);
      data.data?.forEach((city: any) => fetchImage(city.name));
    } catch (err) {
      console.error('City Search Error:', err);
      setError('Failed to fetch cities');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Search Cities (Amadeus)</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Enter a city name"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-4"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {results.length > 0 && (
        <ul className="space-y-4">
          {results.map((city) => (
            <li
              key={city.id}
              className="border p-2 rounded shadow cursor-pointer hover:bg-gray-100"
              onClick={() => {
                const location = `${city.name} (${city.iataCode})`;
                const image = images[city.name] || '';
                console.log('Selected city lat/lng:', city.geoCode.latitude, city.geoCode.longitude); // Debug log
                localStorage.setItem('selectedCity', location);
                localStorage.setItem('selectedCityImage', image);
                localStorage.setItem('selectedCityLat', city.geoCode.latitude);
                localStorage.setItem('selectedCityLng', city.geoCode.longitude);
                navigate('/details');
              }}
            >
              {images[city.name] && (
                <img src={images[city.name]} alt={city.name} className="w-full h-40 object-cover rounded mb-2" />
              )}
              <strong>{city.name}</strong> ({city.iataCode}) – {city.address?.countryName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;
