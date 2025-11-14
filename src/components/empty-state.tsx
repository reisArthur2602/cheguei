import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

interface EmptyStateProps {
    title?: string;
    description?: string;
    onAction?: () => void;
    actionLabel?: string;
}

export const EmptyState = ({
    title = 'Nenhum exame disponível',
    description = 'Você ainda não possui exames disponíveis para retirada.',
    onAction,
    actionLabel,
}: EmptyStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                <FileQuestion className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground max-w-sm mb-6">{description}</p>
            {onAction && actionLabel && (
                <Button
                    onClick={onAction}
                    size="lg"
                    className="shadow-md hover:shadow-lg transition-shadow"
                >
                    {actionLabel}
                </Button>
            )}
        </div>
    );
};
