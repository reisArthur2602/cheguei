import { EmptyState } from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useListAppointments } from '@/hooks/use-list-appointments';
import { confirmAppointment } from '@/http/confirm-appointment';
import { useMutation } from '@tanstack/react-query';
import { format, isAfter, subMinutes } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, CheckCircle, Clock, MapPin, Stethoscope, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

export const AppointmentPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // CPF padrão de teste
    const cpfPaciente = '22277385700';

    const { appointments, loading } = useListAppointments({
        cpfPaciente,
        idLocal: id,
    });

    const appointment = appointments[1];

    // --- Mutation para confirmar presença ---
    const { mutate: confirmPresence, isPending } = useMutation({
        mutationFn: () =>
            confirmAppointment({
                idAgenda: String(appointment.idagenda),
                cpfPaciente,
            }),
        onSuccess: (data) => {
            if (data?.ok || data?.success) {
                toast.success('Presença confirmada com sucesso!');
                navigate(`success?type=appointment`);
            } else {
                toast.warning('A presença já havia sido confirmada ou não pôde ser atualizada.');
            }
        },
        onError: (error) => {
            console.error('Erro ao confirmar presença:', error);
            toast.error('Não foi possível confirmar a presença. Tente novamente.');
        },
    });

    // --- Valida se está dentro dos 30 minutos anteriores ---
    const handleConfirm = () => {
        if (!appointment) return;

        try {
            const dataMarcada = new Date(appointment.datamarcada);
            const [hora, minuto] = appointment.horamarcada.split(':').map(Number);

            // Combina data + hora da consulta
            const horarioConsulta = new Date(dataMarcada);
            horarioConsulta.setHours(hora, minuto, 0, 0);

            const limiteConfirmacao = subMinutes(horarioConsulta, 30);
            const agora = new Date();

            if (isAfter(limiteConfirmacao, agora)) {
                const horaFormatada = format(limiteConfirmacao, "HH:mm 'de'", { locale: ptBR });
                toast.warning(
                    `A confirmação só pode ser feita a partir das ${horaFormatada} (30 minutos antes do horário marcado).`
                );
                return;
            }

            confirmPresence();
        } catch (err) {
            console.error(err);
            toast.error('Erro ao validar o horário da consulta.');
        }
    };

    // --- Loading e fallback ---
    if (loading)
        return (
            <div className="flex-1 p-8">
                <Skeleton className="h-[220px] w-full" />
            </div>
        );

    if (!appointment)
        return (
            <EmptyState
                title="Nenhuma consulta encontrada"
                description="Você ainda não possui consultas agendadas para este período."
                actionLabel="Voltar à página inicial"
                onAction={() => navigate('/')}
            />
        );

    const formattedDate = format(new Date(appointment.datamarcada), 'dd/MM/yyyy', {
        locale: ptBR,
    });

    return (
        <div className="flex-1">
            {/* Cabeçalho */}
            <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl mb-4 text-primary bg-primary/15">
                    <CheckCircle className="size-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Confirmar Presença
                </h1>
                <p className="text-muted-foreground text-lg">
                    Confirme sua presença na consulta agendada
                </p>
            </div>

            {/* Card principal */}
            <Card className="p-8 mb-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                <div className="space-y-6">
                    {/* Paciente */}
                    <div className="flex items-start gap-4 pb-4 border-b border-border">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                            <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">Paciente</h3>
                            <p className="font-medium text-muted-foreground">
                                {appointment.nomepaciente.trim()}
                            </p>
                        </div>
                    </div>

                    {/* Médico */}
                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                            <Stethoscope className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                                Médico Responsável
                            </h3>
                            <p className="font-medium text-muted-foreground">
                                {appointment.nomemedico.trim()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {appointment.especialidade.trim().replace(/_/g, ' ')}
                            </p>
                        </div>
                    </div>

                    {/* Data, hora e local */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Data</p>
                                <p className="font-semibold text-foreground">{formattedDate}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Horário</p>
                                <p className="font-semibold text-foreground">
                                    {appointment.horamarcada}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Local</p>
                                <p className="font-semibold text-foreground">
                                    {appointment.localatendimento.trim()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Button
                onClick={handleConfirm}
                disabled={isPending}
                size="lg"
                className="w-full shadow-md hover:shadow-lg transition-shadow animate-in fade-in duration-700 delay-300"
            >
                {isPending ? 'Confirmando...' : 'Confirmar Presença'}
            </Button>
        </div>
    );
};
