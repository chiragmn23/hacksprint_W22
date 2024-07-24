import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { TrainingTaskUpdateManyWithoutLocalModelsInput } from "./TrainingTaskUpdateManyWithoutLocalModelsInput";

export type LocalModelUpdateInput = {
  trainingAccuracy?: number | null;
  modelUrl?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  trainingTasks?: TrainingTaskUpdateManyWithoutLocalModelsInput;
};
