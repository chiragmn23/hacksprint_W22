import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GlobalModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="modelUrl" source="modelUrl" />
        <NumberInput label="globalAccuracy" source="globalAccuracy" />
      </SimpleForm>
    </Edit>
  );
};
