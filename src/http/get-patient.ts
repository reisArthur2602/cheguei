import { api } from '@/lib/api';


type Request = {
    cpf: string;
};

export const getPatient = async ({ cpf }: Request) => {
    const { data } = await api.get<Patient | null>(`/patients/${cpf}`);
    return data;
};
