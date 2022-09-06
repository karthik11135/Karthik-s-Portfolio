import React from "react";
// import ProjectCard from "./ProjectCard.js";
import classes from "./Project.module.css";
import ProjectItem from "./ProjectItem";
import ProjectsList from "./ProjectsList";


const Project = () => {
  return (
    <div className={classes.projects}>
      <div className="container">
        <div className={classes["project-container"]}>
          <h1 className="subheading">My Projects</h1>
          <div className={classes["projects-display"]}>
         
            <ProjectsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
