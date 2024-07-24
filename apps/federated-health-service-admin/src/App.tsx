import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HospitalList } from "./hospital/HospitalList";
import { HospitalCreate } from "./hospital/HospitalCreate";
import { HospitalEdit } from "./hospital/HospitalEdit";
import { HospitalShow } from "./hospital/HospitalShow";
import { LocalModelList } from "./localModel/LocalModelList";
import { LocalModelCreate } from "./localModel/LocalModelCreate";
import { LocalModelEdit } from "./localModel/LocalModelEdit";
import { LocalModelShow } from "./localModel/LocalModelShow";
import { TrainingTaskList } from "./trainingTask/TrainingTaskList";
import { TrainingTaskCreate } from "./trainingTask/TrainingTaskCreate";
import { TrainingTaskEdit } from "./trainingTask/TrainingTaskEdit";
import { TrainingTaskShow } from "./trainingTask/TrainingTaskShow";
import { GlobalModelList } from "./globalModel/GlobalModelList";
import { GlobalModelCreate } from "./globalModel/GlobalModelCreate";
import { GlobalModelEdit } from "./globalModel/GlobalModelEdit";
import { GlobalModelShow } from "./globalModel/GlobalModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FederatedHealthService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Hospital"
          list={HospitalList}
          edit={HospitalEdit}
          create={HospitalCreate}
          show={HospitalShow}
        />
        <Resource
          name="LocalModel"
          list={LocalModelList}
          edit={LocalModelEdit}
          create={LocalModelCreate}
          show={LocalModelShow}
        />
        <Resource
          name="TrainingTask"
          list={TrainingTaskList}
          edit={TrainingTaskEdit}
          create={TrainingTaskCreate}
          show={TrainingTaskShow}
        />
        <Resource
          name="GlobalModel"
          list={GlobalModelList}
          edit={GlobalModelEdit}
          create={GlobalModelCreate}
          show={GlobalModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
