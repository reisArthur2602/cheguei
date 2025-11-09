import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router";
import { Button } from "./ui/button";

const OnboardingLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-start p-12">
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
          variant={"link"}
        >
          <ArrowLeft /> <span className="font-medium text-xl">Voltar</span>
        </Button>
      </header>

      <main className="flex-1 p-4 flex">
        <Outlet />
      </main>
    </div>
  );
};

export default OnboardingLayout;
