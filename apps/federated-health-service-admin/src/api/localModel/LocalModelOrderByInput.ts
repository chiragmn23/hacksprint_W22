import { SortOrder } from "../../util/SortOrder";

export type LocalModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  trainingAccuracy?: SortOrder;
  modelUrl?: SortOrder;
  hospitalId?: SortOrder;
};
