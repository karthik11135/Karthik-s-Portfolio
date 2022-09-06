import React from "react";
import { Link } from "react-router-dom";
import classes from "./Project.module.css";
import projectsobj from "./projectsobj.js";
const ProjectCard = React.lazy(() => import("./ProjectCard.js"));

const ProjectsList = () => {
  console.log(projectsobj);
  return (
    <div className={classes["grid-container"]}>
      {projectsobj.map((projectItem) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/projects/${projectItem.id}`}
          >
            <ProjectCard
              img={projectItem.img}
              title={projectItem.title}
              key={projectItem.id}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsList;
