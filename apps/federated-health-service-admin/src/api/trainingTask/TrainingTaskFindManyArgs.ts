import { TrainingTaskWhereInput } from "./TrainingTaskWhereInput";
import { TrainingTaskOrderByInput } from "./TrainingTaskOrderByInput";

export type TrainingTaskFindManyArgs = {
  where?: TrainingTaskWhereInput;
  orderBy?: Array<TrainingTaskOrderByInput>;
  skip?: number;
  take?: number;
};
