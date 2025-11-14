export const clinics: Clinic[] = [
    {
        id: 1,
        name: 'Centro de Imagem Galeão',
        servicesAvailable: { confirmAppointment: true, getExams: true },
        address: 'R. Cap. Antônio Martins, 229',
    },
    {
        id: 2,
        name: 'Centro Clínico Master',
        servicesAvailable: { confirmAppointment: true, getExams: false },
        address: 'R. João de Almeida, 109',
    },
    {
        id: 8,
        name: 'Life Care',
        servicesAvailable: { confirmAppointment: true, getExams: true },
        address: 'R. Laureano Rosa, 100',
    },
];

export const getClinic = (id: number) => clinics.find((clinic) => clinic.id === id);
