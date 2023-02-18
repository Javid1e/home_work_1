import React from "react";
import styles from "./Header.module.css";
import Navbar from "./partials/Navbar";
const Header = (props) => {
  return (
    <header>
      <div className={styles["container"]}>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
