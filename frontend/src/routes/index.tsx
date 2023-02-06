import {createBrowserRouter} from 'react-router-dom'
import About from '../pages/About';
import Contact from '../pages/Contact';
import Features from '../pages/Features';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Prices from '../pages/Prices';
import Signin from '../pages/Signin';

export const router = createBrowserRouter([
  {path:"/", element: <Home />, errorElement: <NotFound />, },
  {path:"/about", element: < About /> },
  {path:"/contact", element: <Contact /> },
  {path:"/features", element: <Features /> },
  {path:"/prices", element: <Prices /> },
  {path:"/login", element: <Login /> },
  {path:"/signin", element: <Signin /> },

])