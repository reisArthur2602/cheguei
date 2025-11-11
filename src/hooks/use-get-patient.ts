import { getPatient } from '@/http/get-patient';
import { useQuery } from '@tanstack/react-query';

export const useGetPatient = (cpf?: string) => {
    const { data, isPending } = useQuery({
        queryKey: ['patient', cpf],
        enabled: !!cpf,
        queryFn: () => getPatient({ cpf: cpf! }),
    });

    return { patient: data ?? null, loading: isPending };
};
