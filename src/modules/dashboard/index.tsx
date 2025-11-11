import { Card } from '@/components/ui/card';
import { useClinicStore } from '@/stores/clinic-store';
import { usePatientStore } from '@/stores/patient-store';
import { CheckCircle, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

export const ClinicDashboardPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { patient } = usePatientStore();
    const { clinic } = useClinicStore();

    const actions = [
        {
            title: 'Retirar Exame',
            description: 'Retire seus exames disponíveis',
            icon: FileText,
            path: `/clinic/${id}/dashboard/exam`,
            enabled: clinic?.servicesAvailable.getExams,
        },
        {
            title: 'Confirmar Presença',
            description: 'Confirme sua presença em consultas',
            icon: CheckCircle,
            path: `/clinic/${id}/dashboard/appointment`,
            enabled: clinic?.servicesAvailable.confirmAppointment,
        },
    ];

    const availableActions = actions.filter((action) => action.enabled);

    useEffect(() => {
        if (availableActions.length === 1) navigate(availableActions[0].path);
    }, [availableActions, navigate]);

    return (
        <div className="flex-1">
            <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 capitalize">
                    Olá, {patient?.name.toLowerCase()} 👋
                </h1>
                <p className="text-muted-foreground text-lg">O que você deseja fazer hoje?</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                {availableActions.map((action) => {
                    const Icon = action.icon;
                    return (
                        <Link to={action.path} key={action.title}>
                            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer group">
                                <div className="text-center">
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors`}
                                    >
                                        <Icon className="size-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {action.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {action.description}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
