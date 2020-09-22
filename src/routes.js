import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

export default {
  HOME: {
    path: "/",
    exact: true,
    component: HomePage,
  },
  REGISTER: {
    path: "/register",
    component: LoginPage,
  },
  LOGIN: {
    path: "/login",
    component: RegisterPage,
  },
  CONTACTS: {
    path: "/tasks",
    component: ContactPage,
  },
};
