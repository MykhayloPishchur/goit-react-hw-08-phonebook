import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";
import { Button } from "react-bootstrap";
import styles from "./usermenu.module.css";
import PropTypes from "prop-types";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <Button variant="outline-info" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: "https://i.ibb.co/xj4hjVH/images.jpg",
});

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
