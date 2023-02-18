import React, { useState } from "react";
import Button from "../../UI/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">
              <Button>بازگشت</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q1">
              <Button>سوال 1</Button>
            </Link>
          </li>

          <li>
            <Link to="/answers/q2">
              <Button> سوال 2</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q3">
              <Button> سوال 3</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q4">
              <Button> سوال 4</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q5">
              <Button> سوال 5</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q6">
              <Button> سوال 6</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q7">
              <Button> سوال 7</Button>
            </Link>
          </li>
          <li>
            <Link to="/answers/q8">
              <Button> سوال 8</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
