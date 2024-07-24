import { TrainingTask as TTrainingTask } from "../api/trainingTask/TrainingTask";

export const TRAININGTASK_TITLE_FIELD = "id";

export const TrainingTaskTitle = (record: TTrainingTask): string => {
  return record.id?.toString() || String(record.id);
};
