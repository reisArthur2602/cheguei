import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { ORGS_DATA } from "@/constants";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (idLocal: number) => navigate(`/clinica/${idLocal}`);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold mb-8 drop-shadow-lg">
          Selecionar Clínica
        </h1>

        <div className="flex flex-col gap-6">
          {ORGS_DATA.map((org) => (
            <Button
              key={org.idLocal}
              onClick={() => handleNavigate(org.idLocal)}
              className="capitalize"
            >
              {org.name}
            </Button>
          ))}
        </div>

        <p className="text-muted-foreground mt-8">
          Toque na tela para escolher uma unidade
        </p>
      </div>
    </div>
  );
};
