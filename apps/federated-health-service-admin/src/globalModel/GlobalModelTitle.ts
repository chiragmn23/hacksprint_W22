import { GlobalModel as TGlobalModel } from "../api/globalModel/GlobalModel";

export const GLOBALMODEL_TITLE_FIELD = "modelUrl";

export const GlobalModelTitle = (record: TGlobalModel): string => {
  return record.modelUrl?.toString() || String(record.id);
};
