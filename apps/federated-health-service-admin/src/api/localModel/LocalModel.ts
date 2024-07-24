import { Hospital } from "../hospital/Hospital";
import { TrainingTask } from "../trainingTask/TrainingTask";

export type LocalModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  trainingAccuracy: number | null;
  modelUrl: string | null;
  hospital?: Hospital | null;
  trainingTasks?: Array<TrainingTask>;
};
