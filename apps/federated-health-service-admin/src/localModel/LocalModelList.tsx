import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { HOSPITAL_TITLE_FIELD } from "../hospital/HospitalTitle";

export const LocalModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LocalModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="trainingAccuracy" source="trainingAccuracy" />
        <TextField label="modelUrl" source="modelUrl" />
        <ReferenceField
          label="Hospital"
          source="hospital.id"
          reference="Hospital"
        >
          <TextField source={HOSPITAL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
