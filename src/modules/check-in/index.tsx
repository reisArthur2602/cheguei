import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useCheckIn } from "./hooks/use-check-in";
import { useParams } from "react-router";

export const CheckInPage = () => {
  const { idLocal } = useParams();

  const { disabled, handleKey, onConfirmAppoinment, cpf, maskCpf } = useCheckIn(
    idLocal!
  );

  return (
    <div className="min-h-screen flex flex-col justify-center text-center ">
      <div className="max-w-2xl mx-auto w-full p-8 flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Confirmação de Presença</h1>
          <h3 className="text-muted-foreground text-xl">
            Digite seu CPF para acessar seus exames
          </h3>
        </div>

        <Input
          value={maskCpf(cpf)}
          readOnly
          placeholder="000.000.000-00"
          className="text-center !text-2xl py-8 tracking-widest mt-2"
        />

        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "DEL", 0].map((key) => (
            <Button
              key={key}
              variant={key === "DEL" ? "destructive" : "default"}
              onClick={() => handleKey(String(key))}
              className="transition-all duration-150 !text-3xl rounded-xl active:scale-105 bg-input py-8"
            >
              {key === "DEL" ? "⌫" : key}
            </Button>
          ))}
        </div>

        <Button
          className="text-lg py-6"
          disabled={disabled}
          onClick={onConfirmAppoinment}
        >
          Confirmar Presença <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
