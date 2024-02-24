import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Statistics from "../pages/statistics/Statistics";
import Profile from '../pages/Profile/Profile';
import AuthLayout from "../layouts/AuthLayout";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Tasks from "../pages/Tasks/Tasks";

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'tasks',
        element: <Tasks />
      },
    ]
  },
  //Will be modified
  {
    path: '',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  }
])

export default router;