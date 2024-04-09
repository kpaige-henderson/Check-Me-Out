import React from 'react';
// import FineTune from '../public/FineTune.png';
import HipHop from '../public/HipHop.png'
import WingingIt from '../public/WingingIt.png'
import '../App.css';



function Projects({ imageUrl, title, link }) {
    return (
        <div className="project-container">
            <img className="project-image" src={imageUrl} alt={title} />
            <a className="project-link" href={link} target="_blank" rel="noreferrer">{title}</a>
        </div>
    )
};

export default Projects;
