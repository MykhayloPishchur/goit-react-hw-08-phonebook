import React, { lazy, Suspense, Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import PrivateRoute from "./Common/PrivateRoute";
import authOperations from "./Redux/auth/auth-operations";

// const HomePage = lazy(() =>
//   import("./Pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
// );

// const LoginPage = lazy(() =>
//   import("./Pages/LoginPage/LoginPage.js" /* webpackChunkName: "login-page" */)
// );

// const RegisterPage = lazy(() =>
//   import(
//     "./Pages/RegisterPage/RegisterPage.js" /* webpackChunkName: "register-page" */
//   )
// );

// const ContactPage = lazy(() =>
//   import(
//     "./Pages/ContactPage/ContactPage.js" /* webpackChunkName: "contact-page" */
//   )
// );

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact={routes.HOME.exact}
              path={routes.HOME.path}
              component={routes.HOME.component}
            />
            <Route
              path={routes.REGISTER.path}
              component={routes.REGISTER.component}
            />
            <Route
              path={routes.LOGIN.path}
              component={routes.LOGIN.component}
            />
            <PrivateRoute
              path={routes.CONTACTS.path}
              component={routes.CONTACTS.component}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
