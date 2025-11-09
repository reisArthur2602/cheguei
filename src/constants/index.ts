type Org = {
  idLocal: number;
  name: string;
  collectStudies: boolean;
  checkIN: boolean;
};

const ORGS_DATA: Org[] = [
  {
    idLocal: 1,
    name: "Centro de Imagem Galeão",
    collectStudies: true,
    checkIN: true,
  },
  {
    idLocal: 2,
    name: "Centro Cliníco Master",
    collectStudies: false,
    checkIN: true,
  },
];

export { type Org, ORGS_DATA };
