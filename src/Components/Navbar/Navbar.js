import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../Redux/auth";
import { Navbar } from "react-bootstrap";

import PropTypes from "prop-types";

const AppBar = ({ isAuthenticated }) => (
  <Navbar collapseOnSelect bg="dark" variant="dark">
    <Navbar.Brand>MyWork</Navbar.Brand>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </Navbar>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppBar);
