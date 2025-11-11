import { api } from '@/lib/api';

type Request = {
    cpf: string;
};

export const getStudy = async ({ cpf }: Request) => {
    const { data } = await api.get<Study | null>(`/studies/${cpf}`);
    return data;
};
