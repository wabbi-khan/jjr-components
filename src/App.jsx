import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Event from './components/Event';
import OurPartners from './components/OurPartners';
import Technology from './components/Technology';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Production from './components/Production';
import Merchand from './components/Merchand';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/events',
    element: <Event />,
  },
  {
    path: '/ourPartners',
    element: <OurPartners />,
  },
  {
    path: '/technology',
    element: <Technology />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/testimonials',
    element: <Testimonials />,
  },
  {
    path: '/production',
    element: <Production />,
  },
  {
    path: '/btl-merchand',
    element: <Merchand />,
  },
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
