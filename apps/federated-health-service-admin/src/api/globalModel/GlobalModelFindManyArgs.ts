import { GlobalModelWhereInput } from "./GlobalModelWhereInput";
import { GlobalModelOrderByInput } from "./GlobalModelOrderByInput";

export type GlobalModelFindManyArgs = {
  where?: GlobalModelWhereInput;
  orderBy?: Array<GlobalModelOrderByInput>;
  skip?: number;
  take?: number;
};
