import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LocalModelWhereUniqueInput } from "../localModel/LocalModelWhereUniqueInput";

export type TrainingTaskWhereInput = {
  id?: StringFilter;
  trainingDetails?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  localModel?: LocalModelWhereUniqueInput;
};
