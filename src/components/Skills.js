import React from "react";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <div  >
      <div className="skills-container">
      <header className="skills-header">Skills</header>
      </div>
        {/* <p>I am proficient in the following skills:</p> */}
        <SkillList />
    </div>
  );
};

export default Skills;
