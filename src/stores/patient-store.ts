import { create } from 'zustand';

interface PatientStore {
    patient: Patient | null;
    setPatient: (patient: Patient) => void;
    clearPatient: () => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
    patient: null,
    setPatient: (patient) => set({ patient }),
    clearPatient: () => set({ patient: null }),
}));
