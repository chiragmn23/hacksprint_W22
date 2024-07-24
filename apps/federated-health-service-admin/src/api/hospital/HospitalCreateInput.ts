import { LocalModelCreateNestedManyWithoutHospitalsInput } from "./LocalModelCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  name?: string | null;
  location?: string | null;
  localModels?: LocalModelCreateNestedManyWithoutHospitalsInput;
};
