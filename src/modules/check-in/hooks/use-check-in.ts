import { useState } from "react";
import { useNavigate } from "react-router";

export const useCheckIn = (idLocal: string) => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");

  const handleKey = (key: string) => {
    if (key === "DEL") setCpf((prev) => prev.slice(0, -1));
    else if (cpf.length < 11) setCpf((prev) => prev + key);
  };

  const maskCpf = (value: string) =>
    value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  const onConfirmAppoinment = () => {
    console.log({ cpfPaciente: cpf, idLocal: Number(idLocal) });
    navigate("sucesso");
  };

  return {
    handleKey,
    cpf,
    disabled: !cpf,
    onConfirmAppoinment,
    maskCpf,
  };
};
