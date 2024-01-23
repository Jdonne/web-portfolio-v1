import Nav from "../../shared/Nav";
import React, { useState, useEffect } from "react";
import about from "./content";
import ProjectCard from "../../shared/ProjectCard";
const About = () => {
  return (
    <div className="max-desk">
      <Nav />
      <h1 className="text-center my-3">About</h1>
      <div className="d-flex align-items-center flex-column">
        <ProjectCard content={about.content} img={about.img} />
      </div>
    </div>
  );
};

export default About;
