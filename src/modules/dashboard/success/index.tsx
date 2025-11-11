import { Button } from '@/components/ui/button';
import { usePatientStore } from '@/stores/patient-store';
import { useNavigate, useParams, useSearchParams } from 'react-router';

export const SuccessPage = () => {
    const navigate = useNavigate();
    const { clearPatient } = usePatientStore();

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const handleClick = () => {
        clearPatient();
        navigate(`/clinic/${id}`);
    };

    const type = searchParams.get('type') as 'exam' | 'appointment' | null;

    let title: string;
    let description: string;
    let extraNote: string | null = null;

    switch (type) {
        case 'exam':
            title = 'Tudo certo!';
            description = 'Seu exame foi retirado com sucesso.';
            extraNote = 'Por favor, aguarde o chamado do seu nome para a retirada do exame.';
            break;
        case 'appointment':
            title = 'Tudo certo!';
            description = 'Presença confirmada com sucesso.';
            break;
        default:
            title = 'Operação concluída!';
            description = 'Sua ação foi realizada com sucesso.';
            break;
    }

    return (
        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-center flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                {title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed">
                {description}
            </p>

            {extraNote && (
                <p className="text-base md:text-lg text-primary font-medium mb-6">{extraNote}</p>
            )}

            <p className="text-base md:text-lg text-muted-foreground/80 mb-10 italic">
                Agradecemos pela preferência 💙
            </p>

            <Button
                onClick={handleClick}
                size="lg"
                className="w-full max-w-xs shadow-lg hover:shadow-xl transition-all duration-200 text-base font-medium"
            >
                Voltar ao início
            </Button>
        </div>
    );
};
