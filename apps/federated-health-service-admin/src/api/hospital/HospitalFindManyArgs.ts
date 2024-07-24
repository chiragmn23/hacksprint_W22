import { HospitalWhereInput } from "./HospitalWhereInput";
import { HospitalOrderByInput } from "./HospitalOrderByInput";

export type HospitalFindManyArgs = {
  where?: HospitalWhereInput;
  orderBy?: Array<HospitalOrderByInput>;
  skip?: number;
  take?: number;
};
