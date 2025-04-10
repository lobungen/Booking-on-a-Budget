import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import CreateExcursion from '../pages/CreateExcursion';
import PrivateRoute from './PrivateRoute';
import SearchCity from '../pages/SearchCity';
import CityDetails from '../pages/CityDetails';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';
import SpotDetails from '../pages/SpotDetails';





const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="create" element={<PrivateRoute><CreateExcursion /></PrivateRoute>} />
      <Route path="search" element={<SearchCity />} />
      <Route path="details" element={<CityDetails />} />
      <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/spot" element={<SpotDetails />} />
    </Route>
  </Routes>
);

export default AppRoutes;


