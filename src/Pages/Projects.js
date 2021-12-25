import * as React from 'react';
import Emoji from 'a11y-react-emoji'
import Project from '../Components/Project.js';

const Projects = () => {
    const projects = [
        {
            title: "Connect 4",
            desc: "A basic connect 4 game",
            tech: ["Java"],
            gitlink: "https://github.com/akash5852/connect4",
            link: "",
            image: "",
            imageALT: "",
        },
        {
            title: "Tennis",
            desc: "A basic connect 4 game",
            tech: ["Java"],
            gitlink: "https://github.com/akash5852/connect4",
            link: "",
            image: "",
            imageALT: "",
        },
        {
            title: "Connect 4",
            desc: "A basic connect 4 game",
            tech: ["Java"],
            gitlink: "https://github.com/akash5852/connect4",
            link: "fdaf",
            image: "",
            imageALT: "",
        },
    ]

    return (
        <section className="font-['Mada'] mr-[auto] ml-[auto] max-w-[1000px] pl-3 pr-3 pb-16 " id="about-me">
            <h1 className="tall:text-[2.3em] pt-4 pb-10 text-center text-3xl font-semibold"><Emoji className='font-normal' symbol="👨‍💻" label="star" /> Some of my favourite projects</h1>
            <div id="projects-container">
                {projects.map((project) => (
                    <Project info={project} />
                ))}
            </div>
        </section>
    );

};

export default Projects;