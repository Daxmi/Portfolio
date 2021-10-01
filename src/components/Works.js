import React, { useState } from 'react';
import karzym from './image/karzym.png';
import recentWorks from '../work';

const Works = () => {
    const [description, showDescription] = useState(false);
    const {works} = recentWorks;
    return (
        <div className="works">
            <div className="skills-container">
                <header className="skills-header"> Recent Work</header>
            </div>
            <div className="projects">
                {works.map(work =>
                     <div className="each-project" key={work.name}>
                        <div className="project-img"><img src={work.img} alt={work.name}/></div>
                        <div>
                           <p> {work.stack}t</p>
                        </div>
                       <div className="project-description">
                        <p>{work.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Works
