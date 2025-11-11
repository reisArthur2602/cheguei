import { createBrowserRouter, RouterProvider } from 'react-router';
import { ClinicPage } from './modules/clinic';
import { ClinicDashboardPage } from './modules/dashboard';
import { AppointmentPage } from './modules/dashboard/appointment';
import { ClinicDashboardLayout } from './modules/dashboard/clinic-dashboard-layout';
import { ExamPage } from './modules/dashboard/exam';
import { SuccessPage } from './modules/dashboard/success';
import { SelectClinicPage } from './modules/select-clinic';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SelectClinicPage />,
    },

    {
        path: '/clinic/:id',
        element: <ClinicPage />,
    },

    {
        path: '/clinic/:id/dashboard',
        element: <ClinicDashboardLayout />,
        children: [
            {
                index: true,
                element: <ClinicDashboardPage />,
            },
            {
                path: 'exam',
                element: <ExamPage />,
            },
            {
                path: 'appointment',
                element: <AppointmentPage />,
            },
            {
                path: 'appointment/success',
                element: <SuccessPage />,
            },
            {
                path: 'exam/success',
                element: <SuccessPage />,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
