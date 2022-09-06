import React from "react";
import classes from "./Project.module.css";

const ProjectCard = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes["img-box"]}>
        <img src={props.img}></img>
      </div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default ProjectCard;
