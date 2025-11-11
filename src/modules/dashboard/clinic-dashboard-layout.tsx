import { usePatientStore } from '@/stores/patient-store';
import { Navigate, Outlet } from 'react-router';

export const ClinicDashboardLayout = () => {
    const { patient } = usePatientStore();
    if (!patient) return <Navigate to="/" />;

    return (
        <div className="min-h-screen bg-linear-to-br from-primary/5 via-background to-secondary/5  items-center justify-center p-4 flex">
            <div className="flex-1 max-w-2xl flex">
                <Outlet />
            </div>
        </div>
    );
};
