import React from "react";
import classes from "./Navbar.module.css";
import karthik from "../../assets/karthik.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className="container">
        <div className={classes["nav-flex"]}>
          <div className={classes["face"]}>
            <Link to="/">
              <img className={classes.karthik} src={karthik} />
            </Link>
          </div>
          <ul className={classes["nav-links"]}>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/hero"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/skills"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className={classes.menu}>
            <HiMenu size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
