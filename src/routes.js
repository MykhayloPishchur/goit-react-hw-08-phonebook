// import HomePage from "./Pages/HomePage/HomePage";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import RegisterPage from "./Pages/RegisterPage/RegisterPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./Pages/HomePage/HomePage")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./Pages/RegisterPage/RegisterPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./Pages/LoginPage/LoginPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "TContacts",
    exact: true,
    component: lazy(() => import("./Pages/ContactPage/ContactPage")),
    private: true,
    restricted: false,
  },
];
