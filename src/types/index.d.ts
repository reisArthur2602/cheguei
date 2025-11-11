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
