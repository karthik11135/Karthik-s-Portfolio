import React from "react";
import classes from "./ProjectItem.module.css";
import { useParams } from "react-router-dom";
import projectObject from "./projectsobj";

const ProjectItem = () => {
  const params = useParams().projectId;
  console.log(params);
  console.log(projectObject);
  const selectedProj = projectObject.find((projItem) => {
    return projItem.id === +params;
  });
  console.log(selectedProj);

  return (
    <div className={classes["project-item"]}>
      <div className={classes["flex-row"]}>
        <div className={classes["img-box"]}>
          <img alt="Project demo Pic" src={selectedProj.img} />
        </div>
        <div className={classes["text-box"]}>
          <h2>{selectedProj.title}</h2>
          <p>{selectedProj.overview}</p>
          <p><a href='#'>github</a></p> 
        </div>
      
      </div>
    </div>
  );
};

export default ProjectItem;
