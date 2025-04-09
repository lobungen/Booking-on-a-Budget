import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CreateExcursion from '../pages/CreateExcursion';
import PrivateRoute from './PrivateRoute';
import SearchCity from '../pages/SearchCity';
import CityDetails from '../pages/CityDetails';





const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    <Route path="/create" element={<PrivateRoute><CreateExcursion /></PrivateRoute>} />
    <Route path="/search" element={<SearchCity />} />
    <Route path="/details" element={<CityDetails />} />
  </Routes>
);

export default AppRoutes;
