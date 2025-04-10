import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Booking on a Budget</Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/create">New Excursion</Link>
              <Link to="/search">Search Cities</Link>
              <button onClick={handleLogout} className="text-red-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
