import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className="container">
        <div className={classes["contact-box"]}>
          <h2>About Me</h2>
          <p>
            Hey guys and gals. My name is Karthik and I'm a student at National Institue of Technology Tiruchirapalli. My hobbies include coding, playing guitar and reading books. I've been into frontEnd since many months and I use ReactJs framework with ReduxToolkit for state management. I'm currently working as a freelancer. </p>
          <p>Contact me : karthikrk11135@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
