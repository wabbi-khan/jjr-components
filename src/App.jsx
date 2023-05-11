import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Event from "./components/Event";
import OurPartners from "./components/OurPartners";
import Technology from "./components/Technology";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Production from "./components/Production";
import Merchand from "./components/Merchand";
import AllVideos from "./components/AllVideos";
import Swipe from "./components/SwipeOption";
// import Spinner from './components/Spinner';
import { ScaleLoader } from "react-spinners";
import Logo from "./assets/logo.png";
// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/ourPartners",
    element: <OurPartners />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/production",
    element: <Production />,
  },
  {
    path: "/btl-merchand",
    element: <Merchand />,
  },
  {
    path: "/all-videos",
    element: <AllVideos />,
  },
  {
    path: "/video/:id",
    element: <Swipe />,
  },
]);
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className='spinner'>
          <div>
            <img src={Logo} alt='logo' />
          </div>
          <div>
            <ScaleLoader
              color='#de0000'
              loading={loading}
              // size={150}
              width={10}
              height={50}
            />
          </div>
        </div>
      ) : (
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
      )}
    </div>
  );
};

export default App;
