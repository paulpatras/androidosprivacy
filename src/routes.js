import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import RealmeView from './pages/Realme';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import HuaweiView from './pages/Huawei';
import SamsungView from './pages/Samsung';
import XiaomiView from './pages/Xiaomi';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'xiaomi', element: <XiaomiView /> },
        { path: 'huawei', element: <HuaweiView /> },
        { path: 'samsung', element: <SamsungView /> },
        { path: 'realme', element: <RealmeView />}
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
