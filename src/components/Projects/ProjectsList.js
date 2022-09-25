import React from "react";
import { Link } from "react-router-dom";
import classes from "./Project.module.css";
import projectsobj from "./projectsobj.js";
import ProjectCard from "./ProjectCard.js";
// const ProjectCard = React.lazy(() => import("./ProjectCard.js"));

const ProjectsList = () => {
  return (
    <div className={classes["grid-container"]}>
      {projectsobj.map((projectItem) => {
        return (
          <div key={projectItem.id}>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/projects/${projectItem.id}`}
            >
              <ProjectCard
                key={projectItem.id}
                img={projectItem.img}
                title={projectItem.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
