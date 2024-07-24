import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocalModelListRelationFilter } from "../localModel/LocalModelListRelationFilter";

export type HospitalWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  localModels?: LocalModelListRelationFilter;
};
