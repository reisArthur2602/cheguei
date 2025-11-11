import { create } from 'zustand';

type ClinicStore = {
    clinic: Clinic | null;
    setClinic: (clinic: Clinic) => void;
    clearClinic: () => void;
};

export const useClinicStore = create<ClinicStore>((set) => ({
    clinic: null,
    setClinic: (clinic) => set({ clinic }),
    clearClinic: () => set({ clinic: null }),
}));
