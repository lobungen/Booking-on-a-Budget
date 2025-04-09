import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-2 sm:mb-0">Booking on a Budget</h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          {token ? (
            <>
              <Link to="/" className="hover:underline">Dashboard</Link>
              <Link to="/create" className="hover:underline">New Excursion</Link>
              <Link to="/search" className="hover:underline">Search Cities</Link>
              <button onClick={logout} className="hover:underline text-red-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
