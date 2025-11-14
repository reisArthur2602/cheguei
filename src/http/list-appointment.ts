import { api } from '@/lib/api';

interface Request {
    cpfPaciente: string;
    idLocal: number;
    dataInicial: string;
    dataFinal: string;
}

export const listAppointments = async ({
    cpfPaciente,
    idLocal,
    dataInicial,
    dataFinal,
}: Request) => {
    const { data } = await api.post<ExamScheduleResponse>(
        'https://servidorprincipal.no-ip.info:8096/api/agenda/listaagendamentoporcpf',
        {
            cpfPaciente,
            dataInicial,
            dataFinal,
            idLocal,
        }
    );

    return data || null;
};
