import { LocalModelUpdateManyWithoutHospitalsInput } from "./LocalModelUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  name?: string | null;
  location?: string | null;
  localModels?: LocalModelUpdateManyWithoutHospitalsInput;
};
