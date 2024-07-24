import { LocalModel as TLocalModel } from "../api/localModel/LocalModel";

export const LOCALMODEL_TITLE_FIELD = "modelUrl";

export const LocalModelTitle = (record: TLocalModel): string => {
  return record.modelUrl?.toString() || String(record.id);
};
