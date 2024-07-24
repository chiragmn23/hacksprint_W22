import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LOCALMODEL_TITLE_FIELD } from "./LocalModelTitle";
import { HOSPITAL_TITLE_FIELD } from "../hospital/HospitalTitle";

export const LocalModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="TrainingTask"
          target="localModelId"
          label="TrainingTasks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="trainingDetails" source="trainingDetails" />
            <TextField label="startTime" source="startTime" />
            <TextField label="endTime" source="endTime" />
            <ReferenceField
              label="LocalModel"
              source="localmodel.id"
              reference="LocalModel"
            >
              <TextField source={LOCALMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
