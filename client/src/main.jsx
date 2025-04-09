import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './app.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import LosAngelesMainPage from './pages/LosAngeles.jsx';
import HomePage from './pages/HomePage';
// import ProfilePage from './pages/ProfilePage';
// import AboutPage from './pages/AboutPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
       index: true,
       element: <HomePage />,
      },
      {
        path: 'LosAngelesMainPage',
        element: < LosAngelesMainPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


