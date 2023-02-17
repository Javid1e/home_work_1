import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <div className={styles["container"]}>
        <div className={styles["site-header-inner"]}>
          <nav className={styles["header-nav"]}>
            <div className={styles["header-nav-inner"]}>
              <ul className={styles[("list-reset", "header-nav-right")]}>
                <li>
                  <Link to="/answers/q1" className="button button-primary ">
                    سوال ۱
                  </Link>
                </li>

                <li>
                  <Link to="/answers/q2" className="button button-primary ">
                    سوال 2
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q3" className="button button-primary ">
                    سوال 3
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q4" className="button button-primary ">
                    سوال 4
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q5" className="button button-primary ">
                    سوال 5
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q6" className="button button-primary ">
                    سوال 6
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q7" className="button button-primary ">
                    سوال 7
                  </Link>
                </li>
                <li>
                  <Link to="/answers/q8" className="button button-primary ">
                    سوال 8
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
