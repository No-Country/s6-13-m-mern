import { createBrowserRouter } from 'react-router-dom'
import { ConsortiumDashboard } from '../pages/private/admin/consortium/ConsortiumDashboard'
import Layout from '../components/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Signin from '../pages/Signin'
import UserDashboard from '../pages/private/UserDashboard'
import AdminDashboard from '../pages/private/AdminDashboard'
import Validate from '../pages/Validate'
import ConsortiumMembers from '../pages/private/admin/consortium/ConsortiumMembers'
import ResetPass from '../pages/ResetPass'
import ChangePass from '../pages/ChangePass'
import ConsortiumPayments from '../pages/private/admin/consortium/ConsortiumPayments'
import ConsortiumEnterExit from '../pages/private/admin/consortium/ConsortiumEnterExit'
import ConsortiumEvents from '../pages/private/admin/consortium/ConsortiumEvents'
import UserPayments from '../pages/private/user/UserPayments'
import UserNotifications from '../pages/private/user/UserNotifications'
import LayoutPrivateUser from '../components/layouPrivates/LayoutPrivateUser'
import LayoutPrivateAdmin from '../components/layouPrivates/LayoutPrivateAdmin'
import UnderConstruction from '../pages/UnderConstruction'
import LayoutPrivateTenant from '../components/layouPrivates/LayoutPrivateTenant'
import CreateConsortium from '../pages/private/admin/CreateConsortium'
import EditConsortium from '../pages/private/admin/EditConsortium'
// import EditConsortium from '../pages/private/admin/EditConsortium'

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
      { path: '/login', element: <Login /> },
      { path: '/signin', element: <Signin /> },
      { path: '/underConstruction', element: <UnderConstruction /> },
      { path: '/validateAccount/:id/:token', element: <Validate /> },
      {
        path: '/user',
        element: <LayoutPrivateUser />,
        children: [
          { index: true, element: <UserDashboard /> },
          { path: '/user/payments', element: <UserPayments /> },
          {
            path: '/user/notifications',
            element: <LayoutPrivateTenant />,
            children: [{ index: true, element: <UserNotifications /> }],
          },
        ],
      },
      {
        path: '/admin',
        element: <LayoutPrivateAdmin />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: '/admin/consortium', element: <CreateConsortium /> },
          { path: '/admin/consortium/:id', element: <ConsortiumDashboard /> },
          { path: '/admin/editinfo/:id', element: <EditConsortium /> },
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
