import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home/Home'
import Login from '../pages/Home/Login/Login'
import SignUp from '../pages/Home/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../layouts/Dashboard'
import AddRoom from '../pages/Dashboard/AddRoom'
import { getRoom } from '../api/rooms'
import MyBookings from '../pages/Dashboard/MyBookings'
import MyListings from '../pages/Dashboard/MyListings'
import ManageBookings from '../pages/Dashboard/ManageBookings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'room/:id',
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id),
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: '/dashboard/add-room',
        element: <AddRoom />
      },
      {
        path: '/dashboard/manage-bookings',
        element: <ManageBookings />
      },
      {
        path: '/dashboard/my-bookings',
        element: <MyBookings />
      },
      {
        path: '/dashboard/my-listings',
        element: <MyListings />
      },

    ]
  }
])
