import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LocalModelTitle } from "../localModel/LocalModelTitle";

export const HospitalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="location" source="location" />
        <ReferenceArrayInput
          source="localModels"
          reference="LocalModel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocalModelTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
