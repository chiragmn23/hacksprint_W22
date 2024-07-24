import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { TrainingTaskListRelationFilter } from "../trainingTask/TrainingTaskListRelationFilter";

export type LocalModelWhereInput = {
  id?: StringFilter;
  trainingAccuracy?: FloatNullableFilter;
  modelUrl?: StringNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  trainingTasks?: TrainingTaskListRelationFilter;
};
