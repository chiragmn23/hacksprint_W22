import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LocalModelTitle } from "../localModel/LocalModelTitle";

export const TrainingTaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
