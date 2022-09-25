import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className={classes["footer-box"]}>
          <div className={classes["footer-txt-box"]}>
            <h2 className="footer-text">CopyRights Reserved 2022@</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
