import { createBrowserRouter } from 'react-router-dom'
import { ConsortiumDashboard } from '../components/ConsortiumDashboard'
import Layout from '../components/Layout'
import LayoutPrivate from '../components/LayoutPrivate'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Prices from '../pages/Prices'
import Signin from '../pages/Signin'
import UserDashboard from '../components/UserDashboard'
import AdminDashboard from '../components/AdminDashboard'
import Validate from '../pages/private/Validate'
import ResetPass from '../pages/ResetPass'
import ChangePass from '../pages/ChangePass'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/features', element: <Features /> },
      { path: '/prices', element: <Prices /> },
      { path: '/login', element: <Login /> },
      { path: '/signin', element: <Signin /> },
      { path: '/consortium', element: <ConsortiumDashboard /> },
      { path: '/validateAccount/:id/:token', element: <Validate /> },
      { path: '/user', element: <LayoutPrivate />, children: [{ index: true, element: <UserDashboard /> }] },
      { path: '/admin', element: <LayoutPrivate />, children: [{ index: true, element: <AdminDashboard /> }] },
      { path: '/resetpassword', element: <ResetPass /> },
      { path: '/changepassword/:id/:token', element: <ChangePass /> },

    ],
  },
])
