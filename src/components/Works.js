import React from "react";
import recentWorks from "../work";
import Button from "./Button";

const Works = () => {
  const { works } = recentWorks;
  return (
    <div className="container">
      <div className="header-container">
        <header className="header-text"> Recent Work</header>
      </div>
      <div className="projects">
        {works.map((work) => (
          <div className="each-project" key={work.id}>
            <div className="project-img">
              <img src={work.img} alt={work.name} />
            </div>
            <div className="project-description">
              <div className="project-name">{work.name}</div>
              <div>
                <p> {work.stack}</p>
              </div>
              <div>
                <p>{work.description}</p>
              </div>
              <div>
                <Button work={work} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
