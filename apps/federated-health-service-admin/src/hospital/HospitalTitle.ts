import { Hospital as THospital } from "../api/hospital/Hospital";

export const HOSPITAL_TITLE_FIELD = "name";

export const HospitalTitle = (record: THospital): string => {
  return record.name?.toString() || String(record.id);
};
