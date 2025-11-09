import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export const CheckInSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-2);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <CheckCircle className="w-24 h-24 text-green-600 mb-6" />
      <h1 className="text-4xl font-bold">Presença Confirmada!</h1>
      <p className="text-muted-foreground mt-2 text-lg">
        Obrigado por confirmar sua presença.
      </p>

      <p className="text-muted-foreground text-sm mt-8">
        Retornando ao menu inicial...
      </p>
    </div>
  );
};
