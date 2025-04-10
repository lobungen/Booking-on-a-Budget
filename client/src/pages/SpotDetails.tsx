import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const SpotDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [spot, setSpot] = useState<any>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const stateData = location.state;
    if (!stateData) {
      navigate('/');
      return;
    }
    setSpot(stateData);
    checkIfSaved(stateData);
  }, [location, navigate]);

  const checkIfSaved = (spot: any) => {
    const saved = JSON.parse(localStorage.getItem('savedSpots') || '[]');
    const exists = saved.find((s: any) => s.name === spot.name);
    setIsSaved(!!exists);
  };

  const toggleSave = () => {
    const saved = JSON.parse(localStorage.getItem('savedSpots') || '[]');
    if (isSaved) {
      const filtered = saved.filter((s: any) => s.name !== spot.name);
      localStorage.setItem('savedSpots', JSON.stringify(filtered));
      setIsSaved(false);
    } else {
      saved.push(spot);
      localStorage.setItem('savedSpots', JSON.stringify(saved));
      setIsSaved(true);
    }
  };

  if (!spot) return null;

  const fallbackLat = localStorage.getItem('selectedCityLat');
  const fallbackLon = localStorage.getItem('selectedCityLng');

  const latitude =
    spot.lat ||
    spot.point?.lat ||
    spot.geometry?.coordinates?.[1] ||
    fallbackLat;

  const longitude =
    spot.lon ||
    spot.point?.lon ||
    spot.geometry?.coordinates?.[0] ||
    fallbackLon;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4">← Back</button>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{spot.name}</h1>
        <button onClick={toggleSave} className="text-yellow-500 text-2xl">
          {isSaved ? '★' : '☆'}
        </button>
      </div>

      {spot.address && <p className="text-gray-600">{spot.address}</p>}
      {spot.category && (
        <p className="text-sm text-gray-500 italic mb-4">{spot.category}</p>
      )}

      {latitude && longitude ? (
        <iframe
          title="map"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen
          className="rounded shadow"
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${latitude},${longitude}`}
        />
      ) : (
        <p className="text-gray-500 mt-2">No location data available for this spot.</p>
      )}

      {spot.datasource?.raw?.description && (
        <p className="mt-4 text-gray-700">{spot.datasource.raw.description}</p>
      )}
    </div>
  );
};

export default SpotDetails;
