import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { TrainingTaskCreateNestedManyWithoutLocalModelsInput } from "./TrainingTaskCreateNestedManyWithoutLocalModelsInput";

export type LocalModelCreateInput = {
  trainingAccuracy?: number | null;
  modelUrl?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  trainingTasks?: TrainingTaskCreateNestedManyWithoutLocalModelsInput;
};
