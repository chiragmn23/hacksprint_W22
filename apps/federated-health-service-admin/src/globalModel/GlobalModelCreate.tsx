import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GlobalModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="modelUrl" source="modelUrl" />
        <NumberInput label="globalAccuracy" source="globalAccuracy" />
      </SimpleForm>
    </Create>
  );
};
