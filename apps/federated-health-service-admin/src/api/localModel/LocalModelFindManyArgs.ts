import { LocalModelWhereInput } from "./LocalModelWhereInput";
import { LocalModelOrderByInput } from "./LocalModelOrderByInput";

export type LocalModelFindManyArgs = {
  where?: LocalModelWhereInput;
  orderBy?: Array<LocalModelOrderByInput>;
  skip?: number;
  take?: number;
};
