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
import { LOCALMODEL_TITLE_FIELD } from "../localModel/LocalModelTitle";

export const TrainingTaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TrainingTasks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
