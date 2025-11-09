import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useExamPickup } from "./hooks/use-exam-pickup";

type Exam = {
  id: string;
  modality: string;
  description: string;
  status: string;
  studyId: string;
  createdAt: string;
  patient: {
    id: string;
    name: string;
    cpf: string;
  };
  doctor: {
    name: string;
  };
  attachments: {
    id: string;
    filename: string;
    url: string;
    size: number;
  }[];
};

const mockData: Exam[] = [
  {
    id: "1",
    modality: "ULTRASSONOGRAFIA",
    description: "Ultrassonografia de Abdômen Total",
    status: "PENDING",
    studyId: "STUDY001",
    createdAt: "2025-11-07T18:39:29.769Z",
    patient: {
      id: "PAT001",
      name: "Maria da Silva",
      cpf: "12345678900",
    },
    doctor: {
      name: "Dr. João Pereira",
    },
    attachments: [
      {
        id: "ATT001",
        filename: "Laudo_Ultrassonografia.pdf",
        url: "#",
        size: 523000,
      },
      {
        id: "ATT002",
        filename: "Imagem_Ultrassonografia.jpg",
        url: "#",
        size: 1040000,
      },
    ],
  },
  {
    id: "2",
    modality: "RAIO-X",
    description: "Radiografia de Tórax",
    status: "READY",
    studyId: "STUDY002",
    createdAt: "2025-10-31T15:20:00.000Z",
    patient: {
      id: "PAT001",
      name: "Maria da Silva",
      cpf: "12345678900",
    },
    doctor: {
      name: "Dra. Ana Luiza",
    },
    attachments: [
      {
        id: "ATT003",
        filename: "Laudo_RaioX.pdf",
        url: "#",
        size: 820000,
      },
    ],
  },
];

export const ExamPickupPage = () => {
  const { cpf, disabled, handleKey, maskCpf } = useExamPickup();

  return (
    <div className="min-h-screen flex flex-col justify-center text-center ">
      <div className="max-w-2xl mx-auto w-full p-8 flex flex-col gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Retirada de Exames</h1>
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

        <Button className="text-lg py-6">
          Retirar Exames <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
