import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOCALMODEL_TITLE_FIELD } from "../localModel/LocalModelTitle";

export const TrainingTaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
