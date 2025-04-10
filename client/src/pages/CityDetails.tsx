import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DatePicker from 'react-datepicker';
import L from 'leaflet';
import 'react-datepicker/dist/react-datepicker.css';

const API = 'http://localhost:3001/api';

const categoryOptions = [
  { label: 'Sights', value: 'tourism.sights', icon: '🏛️' },
  { label: 'Restaurants', value: 'catering.restaurant', icon: '🍽️' },
  { label: 'Entertainment', value: 'entertainment', icon: '🎭' },
];

const getDescription = (category: string): string => {
  if (category.includes('restaurant')) return 'A recommended place to eat or try local dishes.';
  if (category.includes('sights')) return 'A must-see attraction in the city.';
  if (category.includes('entertainment')) return 'A great spot to enjoy some local entertainment.';
  return 'A point of interest in this city.';
};

const mockSpotBudget = () => {
  const min = Math.floor(Math.random() * 10 + 10);
  const max = min + Math.floor(Math.random() * 20 + 5);
  return `$${min}–${max}`;
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CityDetails = () => {
  const [city] = useState(() => localStorage.getItem('selectedCity') || '');
  const [image] = useState(() => localStorage.getItem('selectedCityImage') || '');
  const [lat] = useState(() => localStorage.getItem('selectedCityLat'));
  const [lng] = useState(() => localStorage.getItem('selectedCityLng'));
  const [spots, setSpots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('tourism.sights');
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedDates, setSelectedDates] = useState<{ [key: number]: Date | null }>({});

  const navigate = useNavigate();

  const fetchSpots = async (category: string) => {
    if (!lat || !lng) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/geo/pois?lat=${lat}&lng=${lng}&category=${category}`);
      const data = await res.json();

      const filtered = (data.features || []).filter(
        (s: any) =>
          s.geometry?.coordinates?.length === 2 &&
          typeof s.geometry.coordinates[0] === 'number' &&
          typeof s.geometry.coordinates[1] === 'number'
      );

      const mapped = filtered.map((s: any) => ({
        name: s.properties.name || 'Unnamed Place',
        address: s.properties.address_line1 || '',
        category: s.properties.category || '',
        lon: s.geometry.coordinates[0],
        lat: s.geometry.coordinates[1],
        description: getDescription(s.properties.category || ''),
        budget: mockSpotBudget(),
      }));

      setSpots(mapped);
    } catch (err) {
      console.error('Error fetching spots', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpots(selectedCategory);
  }, [selectedCategory]);

  const getIcon = (category: string) => {
    if (category.includes('restaurant')) return '🍽️';
    if (category.includes('sights')) return '🏛️';
    if (category.includes('entertainment')) return '🎭';
    return '📍';
  };

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const handleBook = (spot: any, date: Date) => {
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');

    const newBooking = {
      name: spot.name,
      address: spot.address || '',
      category: spot.category || '',
      date: date.toISOString()
    };

    localStorage.setItem('bookings', JSON.stringify([...existing, newBooking]));
    alert(`✅ Booked "${spot.name}" on ${date.toDateString()}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button onClick={() => navigate('/search')} className="text-blue-500 mb-4">← Back to search</button>
      <h2 className="text-2xl font-bold mb-2">{city}</h2>
      {image && <img src={image} alt={city} className="w-full h-64 object-cover rounded mb-4" />}

      <div className="flex space-x-3 mb-4">
        {categoryOptions.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setSelectedCategory(cat.value);
              setVisibleCount(10);
            }}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="h-[300px] w-full mb-6 rounded shadow">
        {lat && lng && (
          <MapContainer center={[+lat, +lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {spots.slice(0, visibleCount).map((spot, idx) => (
              <Marker key={idx} position={[spot.lat, spot.lon]} icon={customIcon}>
                <Popup>
                  <strong>{spot.name}</strong><br />
                  {spot.address || ''}<br />
                  {spot.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

      {loading ? (
        <p>Loading spots...</p>
      ) : (
        <ul className="space-y-3">
          {spots.slice(0, visibleCount).map((spot, index) => (
            <li key={index} className="border p-3 rounded-lg shadow bg-white">
              <div
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate('/spot', { state: spot })}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getIcon(spot.category)}</span>
                  <strong className="text-lg">{spot.name}</strong>
                </div>
                {spot.address && <p className="text-sm text-gray-600">📍 {spot.address}</p>}
                {spot.description && (
                  <p className="text-sm text-gray-500 italic mt-1">{spot.description}</p>
                )}
                <p className="text-sm text-green-700 mt-1">💸 Avg budget: {spot.budget}</p>
              </div>

              <div className="mt-2">
                <DatePicker
                  selected={selectedDates[index] || null}
                  onChange={(date: Date | null) =>
                    setSelectedDates((prev) => ({ ...prev, [index]: date }))
                  }
                  className="border px-3 py-1 rounded text-sm w-full"
                  placeholderText="Select a date"
                />
                {selectedDates[index] && (
                  <button
                    onClick={() => handleBook(spot, selectedDates[index]!)}
                    className="mt-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityDetails;
