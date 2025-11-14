import { listAppointments } from '@/http/list-appointment';
import { useQuery } from '@tanstack/react-query';

type UseListAppointmentsProps = {
    cpfPaciente?: string;
    idLocal?: string;
};

export const useListAppointments = ({ cpfPaciente, idLocal }: UseListAppointmentsProps) => {
    // const today = new Date();
    // const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    // const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // const dataInicial = firstDay.toISOString().split('T')[0];
    // const dataFinal = lastDay.toISOString().split('T')[0];

    //    "cpfPaciente":"22277385700",
    //     "dataInicial":"2025-11-01",
    //     "dataFinal":"2025-11-30",

    const { data, isPending } = useQuery({
        retry: 1,
        queryKey: ['appointments', cpfPaciente, idLocal],
        queryFn: () =>
            listAppointments({
                cpfPaciente: '22277385700',
                idLocal: Number(idLocal),
                dataInicial:'2025-11-01',
                dataFinal:'2025-11-30',
            }),
        enabled: !!cpfPaciente && !!idLocal,
    });

    return {
        appointments: data?.dados ?? [],
        total: data?.total ?? 0,
        loading: isPending,
    };
};
