import { Button } from '@/components/ui/button';

interface NumericKeyboard {
    onKeyPress: (key: string) => void;
}

export const NumericKeyboard = ({ onKeyPress }: NumericKeyboard) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    return (
        <div className="grid grid-cols-3 gap-2 ">
            {keys.map((key) => (
                <Button
                    key={key}
                    variant="secondary"
                    size="lg"
                    onClick={() => onKeyPress(key)}
                    className=" text-xl!  hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                    {key}
                </Button>
            ))}
            <Button
                variant="destructive"
                size="lg"
                onClick={() => onKeyPress('backspace')}
                className="col-span-2 h-14 hover:bg-destructive/10 hover:border-destructive/50 transition-all"
            >
                Apagar
            </Button>
        </div>
    );
};
