import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LocalModelTitle } from "../localModel/LocalModelTitle";

export const TrainingTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="trainingDetails" multiline source="trainingDetails" />
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceInput
          source="localModel.id"
          reference="LocalModel"
          label="LocalModel"
        >
          <SelectInput optionText={LocalModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
