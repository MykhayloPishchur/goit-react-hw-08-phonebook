import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";

const HomePage = lazy(() =>
  import("./Pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);

const LoginPage = lazy(() =>
  import("./Pages/LoginPage/LoginPage.js" /* webpackChunkName: "login-page" */)
);

const RegisterPage = lazy(() =>
  import(
    "./Pages/RegisterPage/RegisterPage.js" /* webpackChunkName: "register-page" */
  )
);

const App = () => (
  <>
    <Navbar></Navbar>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
      </Switch>
    </Suspense>
  </>
);
export default App;
