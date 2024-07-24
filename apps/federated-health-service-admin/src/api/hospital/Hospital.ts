import { LocalModel } from "../localModel/LocalModel";

export type Hospital = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  localModels?: Array<LocalModel>;
};
