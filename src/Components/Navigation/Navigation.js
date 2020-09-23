import React from "react";
import { connect } from "react-redux";
import { authSelectors } from "../../Redux/auth";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ isAuthenticated }) => (
  <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">
      Home
    </Nav.Link>

    {isAuthenticated && (
      <Nav.Link as={Link} to="/contacts">
        Contacts
      </Nav.Link>
    )}
  </Nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
