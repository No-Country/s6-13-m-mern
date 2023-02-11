import { createBrowserRouter } from 'react-router-dom'
import { AdminDashboard } from '../components/AdminView/AdminDashboard'
import Layout from '../components/Layout'
import LayoutPrivate from '../components/LayoutPrivate'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Features from '../pages/Features'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Prices from '../pages/Prices'
import Signin from '../pages/Signin'
import UserInformation from '../pages/private/UserInformation'
import UserDashboard from '../components/UserDashboard'
import UserAmenities from '../pages/private/UserAmenities'
import UserDocuments from '../pages/private/UserDocuments'
import UserOrders from '../pages/private/UserOrders'
import UserPayments from '../pages/private/UserPayments'
import UserVoting from '../pages/private/UserVoting'

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
      { path: '/admin', element: <AdminDashboard /> },
      {
        element: <UserDashboard />,
        children: [
          { path: '/userInformation', element: <UserInformation /> },
          { path: '/userAmenities', element: <UserAmenities /> },
          { path: '/userDocuments', element: <UserDocuments /> },
          { path: '/userOrders', element: <UserOrders /> },
          { path: '/userPayments', element: <UserPayments /> },
          { path: '/userVoting', element: <UserVoting /> },
        ],
      },
      { path: '/dashboard', element: <LayoutPrivate />, children: [{ index: true, element: <Dashboard /> }] },
    ],
  },
])
