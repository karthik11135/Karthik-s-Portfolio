import React from "react";
import classes from "./Skills.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry, SiDebian } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div className="container">
        <div className={classes["skills-wrapper"]}>
          <h1 className="subheading">My Skills</h1>
          <div className={classes["skills-logo-wrapper"]}>
            <div className={classes["skills-logos"]}>
              <AiFillHtml5 size={70} />
              <SiCsswizardry size={70} />
              <IoLogoJavascript size={70} />
              <SiReact size={70} />
              <SiRedux size={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
