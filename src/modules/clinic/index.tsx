import { NumericKeyboard } from '@/components/numeric-keyboard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGetPatient } from '@/hooks/use-get-patient';
import { formatCPF } from '@/lib/format-cpf';
import { usePatientStore } from '@/stores/patient-store';
import { User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const ClinicPage = () => {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');
    const { setPatient } = usePatientStore();

    const cleanCPF = cpf.replace(/\D/g, '');

    const { patient } = useGetPatient(cleanCPF.length === 11 ? cleanCPF : undefined);

    const handleKeyPress = (key: string) => {
        if (key === 'backspace') {
            setCpf((prev) => prev.slice(0, -1));
        } else if (cpf.replace(/\D/g, '').length < 11) {
            setCpf((prev) => formatCPF(prev + key));
        }
    };

    const handleSubmit = () => {
        if (cleanCPF.length !== 11) {
            toast.error('Por favor, digite um CPF válido');
            return;
        }

        if (!patient) {
            toast.error('Paciente não encontrado');
            return;
        }

        setPatient(patient);

        toast.success(`Bem-vindo(a), ${patient.name}!`);
        navigate('dashboard');
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                        <User className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Olá 👋 Bem-vindo!
                    </h1>
                    <p className="text-muted-foreground text-lg">Digite seu CPF para continuar</p>
                </div>

                <Card className="p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                    <div className="bg-muted/50 rounded-2xl py-6 px-4 text-center">
                        <input
                            type="text"
                            value={cpf}
                            readOnly
                            placeholder="000.000.000-00"
                            className="w-full text-3xl font-semibold text-center bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    <NumericKeyboard onKeyPress={handleKeyPress} />

                    <Button
                        onClick={handleSubmit}
                        size="lg"
                        disabled={cpf.replace(/\D/g, '').length !== 11}
                    >
                        Continuar
                    </Button>
                </Card>
            </div>
        </div>
    );
};
