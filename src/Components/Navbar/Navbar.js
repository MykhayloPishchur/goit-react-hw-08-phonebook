// import React from "react";
// import { NavLink } from "react-router-dom";
// import styles from "./navbar.module.css";
// import routes from "../../routes";
// import { authSelectors } from "../redux/auth";

// const Navbar = () => {
//   return (
//     <div className={styles.navContainer}>
//       <div className={styles.titleLogo}>
//         <h3>
//           <NavLink
//             exact
//             to={routes.HOME.path}
//             className={styles.navLink}
//             activeClassName={styles.active}
//           >
//             Phonebook
//           </NavLink>
//         </h3>
//       </div>

//       <div className={styles.navOption}>
//         <ul>
//           <li className={styles.Item}>
//             <NavLink
//               to={routes.LOGIN.path}
//               className={styles.navLink}
//               activeClassName={styles.active}
//             >
//               Login
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to={routes.REGISTER.path}
//               className={styles.navLink}
//               activeClassName={styles.active}
//             >
//               Register
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { connect } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../Redux/auth";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const Navbar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navbar);
