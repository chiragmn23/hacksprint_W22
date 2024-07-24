import { LocalModelWhereUniqueInput } from "../localModel/LocalModelWhereUniqueInput";

export type TrainingTaskCreateInput = {
  trainingDetails?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  localModel?: LocalModelWhereUniqueInput | null;
};
