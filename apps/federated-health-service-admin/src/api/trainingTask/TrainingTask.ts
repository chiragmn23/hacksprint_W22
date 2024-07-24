import { LocalModel } from "../localModel/LocalModel";

export type TrainingTask = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  trainingDetails: string | null;
  startTime: Date | null;
  endTime: Date | null;
  localModel?: LocalModel | null;
};
