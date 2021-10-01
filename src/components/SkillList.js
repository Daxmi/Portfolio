import React from "react";
import skill from "../skill";

const SkillList = () => {
  const {proficiency} =skill
  return (
    <div className="eachSkill">
      {proficiency.map(skills => 
        <div className="skill" key= {skills.id}>
        <div>
          <img src={skills.image} alt={skills.name}/>
        </div>
        <div className="skill-name"><p>{skills.name}</p></div>
      </div>
      )}
    </div>
  );
};

export default SkillList;
