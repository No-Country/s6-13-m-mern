import { createBrowserRouter } from 'react-router-dom'
import { ConsortiumDashboard } from '../pages/private/admin/consortium/ConsortiumDashboard'
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
import UserDashboard from '../pages/private/UserDashboard'
import AdminDashboard from '../pages/private/AdminDashboard'
import Validate from '../pages/Validate'
import ConsortiumMembers from '../pages/private/admin/consortium/ConsortiumMembers'
import ResetPass from '../pages/ResetPass'
import ChangePass from '../pages/ChangePass'
import ConsortiumEditInfo from '../pages/private/admin/consortium/ConsortiumEditInfo'
import ConsortiumPayments from '../pages/private/admin/consortium/ConsortiumPayments'
import ConsortiumEnterExit from '../pages/private/admin/consortium/ConsortiumEnterExit'
import ConsortiumEvents from '../pages/private/admin/consortium/ConsortiumEvents'

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
      { path: '/validateAccount/:id/:token', element: <Validate /> },
      { path: '/user', element: <LayoutPrivate />, children: [{ index: true, element: <UserDashboard /> }] },
      {
        path: '/admin',
        element: <LayoutPrivate />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: '/admin/consortium/:id', element: <ConsortiumDashboard /> },
          { path: '/admin/editinfo/:id', element: <ConsortiumEditInfo /> },
          { path: '/admin/payments/:id', element: <ConsortiumPayments /> },
          { path: '/admin/entrance/:id', element: <ConsortiumEnterExit /> },
          { path: '/admin/events/:id', element: <ConsortiumEvents /> },
          { path: '/admin/members/:id', element: <ConsortiumMembers /> },
        ],
      },
      { path: '/resetpassword', element: <ResetPass /> },
      { path: '/changepassword/:id/:token', element: <ChangePass /> },
    ],
  },
])
