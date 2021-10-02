import React from "react";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <div  className="container">
      <div className="header-container">
      <header className="header-text">Skills</header>
      </div>
        {/* <p>I am proficient in the following skills:</p> */}
        <SkillList />
    </div>
  );
};

export default Skills;
