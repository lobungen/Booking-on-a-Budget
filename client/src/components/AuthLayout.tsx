import { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

const travelImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // beach
  'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80', // airplane
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // mountain
  'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?auto=format&fit=crop&w=800&q=80', // road trip
  'https://images.unsplash.com/photo-1549880181-56a44cf4a9a1?auto=format&fit=crop&w=800&q=80', // city lights
];

const AuthLayout = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % travelImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-300">
      {/* Left slideshow */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        {travelImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold z-10 px-6">
          Explore More, Spend Less ✈️
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded shadow text-sm font-medium hover:bg-gray-200 z-20"
        >
          {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Right form area */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
