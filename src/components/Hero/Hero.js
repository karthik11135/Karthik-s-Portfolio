import React from "react";
import classes from "./Hero.module.css";
import { GrCode } from "react-icons/gr";

const Hero = () => {
  const iconClass = {
    color: "yellow",
    backgroundColor: "White",
    borderRadius: "100%",
    padding: "2rem",
  };
  return (
    <div className={classes.hero}>
      <div className="container">
        <div className={classes["hero-wrapper"]}>
          <div className={classes.col1}>
            <h1>Hey there</h1>
            <h2>
              <span>I</span>
              <span>'</span>
              <span>m </span>
              <span> </span>
              <span>K</span>
              <span>a</span>
              <span>r</span>
              <span>t</span>
              <span>h</span>
              <span>i</span>
              <span>k</span>
            </h2>
            <p>FrontEnd Developer</p>
          </div>
          <div className={classes.col2}>
            <GrCode style={iconClass} size={160} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
