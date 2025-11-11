import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, CheckCircle, Clock, MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router';

export const AppointmentPage = () => {
    const navigate = useNavigate();

    const appointment = {
        doctor: 'Dr. Carlos Mendes',
        specialty: 'Cardiologista',
        date: '20/03/2024',
        time: '14:30',
        location: 'Consultório 305 - 3º andar',
    };

    const handleConfirm = () => {
        navigate(`success?type=appointment`);
    };

    return (
        <div className="flex-1">
            <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center justify-center size-16 rounded-2xl  mb-4 text-primary bg-primary/15">
                    <CheckCircle className="size-8 " />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Confirmar Presença
                </h1>
                <p className="text-muted-foreground text-lg">
                    Confirme sua presença na consulta agendada
                </p>
            </div>

            <Card className="p-8 mb-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                <div className="space-y-6">
                    <div className="flex items-start gap-4 pb-6 border-b border-border">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0">
                            <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                                {appointment.doctor}
                            </h3>
                            <p className="text-muted-foreground">{appointment.specialty}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Data</p>
                                <p className="font-semibold text-foreground">{appointment.date}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Horário</p>
                                <p className="font-semibold text-foreground">{appointment.time}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted/50">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Local</p>
                                <p className="font-semibold text-foreground">
                                    {appointment.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Button
                onClick={handleConfirm}
                size="lg"
                className="w-full shadow-md hover:shadow-lg transition-shadow animate-in fade-in duration-700 delay-300"
            >
                Confirmar Presença
            </Button>
        </div>
    );
};
