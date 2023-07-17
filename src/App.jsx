import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import "./styles/global.scss";
import { theme } from "./styles/theme";
import { ContactsList } from "./components/pages/contacts/ContactsList";
import { dataProvider } from "./API/dataProvider";
import { authProvider } from "./API/authProvider";
import { LoginPage } from "./components/pages/login/LoginPage";
import { ProfilePage } from "./components/pages/profile/ProfilePage";
import { AppLayout } from "./components/AppLayout";

export const App = () => (
  <Admin
    theme={theme}
    layout={AppLayout}
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="contacts" list={ContactsList} />
    <CustomRoutes>
      <Route path="/profile" element={<ProfilePage />} />
    </CustomRoutes>
  </Admin>
);
