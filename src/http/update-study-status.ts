import { api } from '@/lib/api';

type Request = {
    studyId: string;
};

const status: StudyStatus = 'PENDING';

export const updateStudyStatus = async ({ studyId }: Request) => {
    await api.patch(`/studies/${studyId}/status`, { status });
};
