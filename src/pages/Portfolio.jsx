import React from 'react';
import '../App.css';
import { Projects, FineTune, HipHop, WingingIt} from '../components/Projects'


const deployedProjects = [
    {
        title: "Hip Hop Quiz",
        imageUrl: HipHop,
        link: "https://kpaige-henderson.github.io/Hip-Hop-Hooray/",
    },
    {
        title: "Spotify Schedule",
        imageUrl: FineTune,
        link: "https://camillebagnani.github.io/fine-tune-your-day/",
    },
    {
        title: "Thanksgiving Point Butterfly Guide",
        imageUrl: WingingIt,
        link: "https://lepidopterarium-ac74b3d1a334.herokuapp.com/",
    },
    
];

export default function Projects() {
    return (
        <div>
            <h1 className="title">Projects</h1>
            <div className="project-container">
            {deployedProjects.map((project, index) => (
                <Projects key={index} project={deployedProjects}/>
            ))}
        </div>
        </div>
    );
}
