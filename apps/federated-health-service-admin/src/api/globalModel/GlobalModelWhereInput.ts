import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type GlobalModelWhereInput = {
  id?: StringFilter;
  modelUrl?: StringNullableFilter;
  globalAccuracy?: FloatNullableFilter;
};
