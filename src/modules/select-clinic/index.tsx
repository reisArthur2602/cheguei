import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { clinics } from '@/data/clinic';
import { Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export const SelectClinicPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                        <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Selecione sua clínica
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Escolha a unidade para continuar
                    </p>
                </div>

                <div className="grid gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                    {clinics.map((clinic) => (
                        <Link to={`/clinic/${clinic.id}`} key={clinic.id}>
                            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer group">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {clinic.name}
                                        </h3>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="size-4 mr-2 shrink-0" />
                                            <span className="text-sm">{clinic.address}</span>
                                        </div>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        Selecionar
                                    </Button>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
