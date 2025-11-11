import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetStudy } from '@/hooks/use-get-study';
import { formatDate } from '@/lib/format-date';
import { Calendar, CheckCircle2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';

export const ExamPage = () => {
    const { study, loading } = useGetStudy();
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate(`success?type=exam`);
    };

    return (
        <div className="flex-1 flex flex-col gap-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Retirada de Exames
                </h1>
                <p className="text-muted-foreground text-lg">Exames disponíveis para retirada</p>
            </div>
            {loading && <Skeleton className="h-[106px] w-full" />}
            {study && (
                <Card
                    key={study.id}
                    className={`p-6 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4  delay-150`}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-foreground capitalize">
                                    {study.description}
                                </h3>
                                <Badge>
                                    {study.status === 'REPORTED' ? 'Disponível' : 'Retirado'}
                                </Badge>
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm ">
                                <Calendar className="size-4 mr-2" />
                                <span className="font-medium ">
                                    Data do exame: {formatDate(study.createdAt)}
                                </span>
                            </div>
                        </div>
                        {study.status === 'DELIVERED' && (
                            <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                        )}
                    </div>
                </Card>
            )}

            <Button
                size="lg"
                onClick={handleSubmit}
                className="w-full shadow-md hover:shadow-lg transition-shadow animate-in fade-in duration-700 delay-300"
            >
                Confirmar Retirada (1 exame)
            </Button>
        </div>
    );
};
