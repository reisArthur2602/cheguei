import axios from 'axios';

type Request = {
    idAgenda: string;
    cpfPaciente: string;
};

export const confirmAppointment = async ({ idAgenda, cpfPaciente }: Request) => {
    const { data } = await axios.post(
        'https://servidorprincipal.no-ip.info:8096/api/agenda/atualizahorachegada',
        { idAgenda, cpfPaciente }
    );

    return data;
};


