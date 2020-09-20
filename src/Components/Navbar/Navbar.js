import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import routes from "../../routes";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.titleLogo}>
        <h3>
          <NavLink
            exact
            to={routes.home}
            className={styles.navLink}
            activeClassName={styles.active}
          >
            Phonebook
          </NavLink>
        </h3>
      </div>

      <div className={styles.navOption}>
        <ul>
          <li className={styles.Item}>
            <NavLink
              to={routes.login}
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to={routes.register}
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
