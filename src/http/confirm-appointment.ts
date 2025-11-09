import axios from "axios";

type Request = {
  cpfpaciente: string;
  idLocal: string;
};

export const confirmAppointment = async ({ cpfpaciente, idLocal }: Request) => {
  const { data } = await axios.post(
    "https://200.100.100.17:8096/api/agenda/listaagendamentoporcpf",
    { cpfpaciente, idLocal }
  );

  return data;
};
