import * as React from 'react';
import Emoji from 'a11y-react-emoji'
import Project from '../Components/Project.js';
import c4 from "../Resources/c4.jpg"
import gymregistration from "../Resources/gymregistration.jpg"
import mealapp from "../Resources/mealapp.jpg"

const Projects = () => {
    const projects = [
        {
            title: "Meal Idea Generator",
            desc: "A full-stack meal app made to help users conveniently generate meal ideas on a daily basis.",
            tech: ["React", "Express", "Node", "MongoDB"],
            gitlink: "https://github.com/akash5852/food-random-app",
            link: "",
            image: mealapp,
            imageALT: "Meal idea generator front end",
        },
        {
            title: "Gym Registration Bot",
            desc: "A automatic bot that books optimal time slots at the McMaster Pulse school gym using the Google Cloud Platform.",
            tech: ["Python", "Selenium"],
            gitlink: "https://github.com/akash5852/gymregistrationbot",
            link: "",
            image: gymregistration,
            imageALT: "Gym registration code base",
        },
        {
            title: "Connect 4",
            desc: "A Connect 4 recreation using Object-oriented practices to handle game flow and 2D graphics to create a interactive UI.",
            tech: ["Java"],
            gitlink: "https://github.com/akash5852/connect4",
            link: "",
            image: c4,
            imageALT: "Connect 4 in game",
        },
    ]

    return (
        <section className="font-['Mada'] mr-[auto] ml-[auto] max-w-[1000px] pl-3 pr-3 pb-16 " id="projects">
            <h1 className="tall:text-[2.3em] pt-4 pb-10 text-center text-3xl font-semibold"><Emoji className='font-normal' symbol="👨‍💻" label="star" /> Some of my favourite projects</h1>
            <div className=' lg:flex justify-center' id="projects-container">
                {projects.map((project) => (
                    <Project info={project} />
                ))}
            </div>
        </section>
    );

};

export default Projects;