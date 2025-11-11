import { getStudy } from '@/http/get-study';
import { useQuery } from '@tanstack/react-query';

export const useGetStudy = () => {
    const cpf = '78768802749';

    const { data, isPending } = useQuery({
        queryKey: ['study', cpf],
        queryFn: () => getStudy({ cpf }),
        enabled: !!cpf,
    });

    return { study: data ?? null, loading: isPending };
};
