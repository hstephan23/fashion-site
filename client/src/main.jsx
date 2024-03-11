import ReactDOM from 'react-dom/client'
// Import the required Provider component and createBrowserRouter helper function
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Content from './pages/Content';
import OrderHistory from './pages/OrderHistory.jsx';
import CurrentOrder from './pages/CurrentOrder.jsx';
import Shop from './pages/Shop.jsx';

import Cart from './components/Cart/index.jsx'

// Define the router object which will control the Provider's ability to display certain pages to match the proper URLs
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/me',
        element: <Profile/>
      },
      {
        path: '/profile/:profileId',
        element: <Profile/>
      },
      {
        path: '/content',
        element: <Content/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/cart',
        element: <CurrentOrder />
      },
      // {
      //   path: '/order',
      //   element: <OrderHistory/>
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
