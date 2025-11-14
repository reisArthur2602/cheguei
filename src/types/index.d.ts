type Clinic = {
    id: number;
    name: string;
    address: string;
    servicesAvailable: {
        confirmAppointment: boolean;
        getExams: boolean;
    };
};

type Patient = {
    id: string;
    name: string;
    cpf: string;
};
type StudyStatus = 'PENDING' | 'REPORTING' | 'REPORTED' | 'DELIVERED';

type Study = {
    id: string;
    modality: string | null;
    description: string | null;
    status: StudyStatus;
    studyId: string | null;
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

type StudyStatus = 'PENDING' | 'REPORTING' | 'REPORTED' | 'DELIVERED';

type ExamScheduleResponse = {
    ok: boolean;
    cpf: string;
    total: number;
    dados: ExamData[];
};

type ExamData = {
    idagenda: number;
    datamarcada: string;
    horamarcada: string;
    nomepaciente: string;
    idprontuario: number;
    nomemedico: string;
    especialidade: string;
    convenio: string;
    c_tipo: number;
    localatendimento: string;
    tipoatendimento: string;
};
