import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HospitalTitle } from "../hospital/HospitalTitle";
import { TrainingTaskTitle } from "../trainingTask/TrainingTaskTitle";

export const LocalModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="trainingAccuracy" source="trainingAccuracy" />
        <TextInput label="modelUrl" source="modelUrl" />
        <ReferenceInput
          source="hospital.id"
          reference="Hospital"
          label="Hospital"
        >
          <SelectInput optionText={HospitalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="trainingTasks"
          reference="TrainingTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrainingTaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
