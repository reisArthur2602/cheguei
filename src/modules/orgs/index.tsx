import { Link, Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { ORGS_DATA, type Org } from "@/constants";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const getInfoOrganization = (idLocal: number): Org | null => {
  const org = ORGS_DATA.find((org) => org.idLocal === idLocal);
  return org || null;
};

export const OrganizationPage = () => {
  const { idLocal } = useParams();

  const org = getInfoOrganization(parseInt(idLocal as string));
  if (!org) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl w-full p-6">
        <h1 className="text-3xl font-bold mb-8 drop-shadow-lg">{org.name}</h1>

        <div className="flex flex-col gap-6">
          {org.collectStudies && (
            <Link to="retirar-exame" className={buttonVariants()}>
              Retirada de Exame <ChevronRight />
            </Link>
          )}

          {org.checkIN && (
            <Link to="confirmar-presenca" className={buttonVariants()}>
              Confirmar Presença <ChevronRight />
            </Link>
          )}

          <p className="text-muted-foreground">
            Toque na tela para escolher uma unidade
          </p>
        </div>
      </div>
    </div>
  );
};
