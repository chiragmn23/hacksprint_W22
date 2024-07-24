import { SortOrder } from "../../util/SortOrder";

export type TrainingTaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  trainingDetails?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  localModelId?: SortOrder;
};
