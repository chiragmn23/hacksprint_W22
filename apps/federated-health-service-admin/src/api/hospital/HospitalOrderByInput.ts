import { SortOrder } from "../../util/SortOrder";

export type HospitalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
};
