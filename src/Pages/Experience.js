import * as React from 'react';
import Emoji from 'a11y-react-emoji';
import Experience from '../Components/Experience.js'; // Adjust the path as necessary
import companyLogo1 from "../Resources/TD.png"; // Sample company logo
import companyLogo2 from "../Resources/Sunlife.png"; // Sample company logo
import companyLogo3 from "../Resources/cerc.jpg"; // Sample company logo

const Experiences = () => {
    const experiences = [
        {
            title: "Software Developer Intern",
            company: "TD AMCB",
            duration: "May 2023 - Sep 2023, Jan 2024 - Present",
            desc: "Worked on developing scalable microservices for a cloud-based employee platform. Involved in full software development lifecycle.",
            tech: ["Java","Spring","Oracle SQL","TypeScript", "React", "Node.js"],
            companyLogo: companyLogo1,
            alt: "TD Bank logo",
        },
        {
            title: "Software Developer Intern",
            company: "Sun Life Financial",
            duration: "Sep 2023 - Dec 2023",
            desc: "Contributed to several key features of the internal API portal, focusing on full-stack development and backend integration.",
            tech: ["Java", "Spring", "TypeScript", "React","MongoDB", "Kafka"],
            companyLogo: companyLogo2,
            alt: "Sun Life logo",
        },
        {
            title: "Software Developer Intern (part-time)",
            company: "CERC@MARC",
            duration: "May 2022 - Sep 2022",
            desc: "Development of an internal tool to automate local and server side database sync processes.",
            tech: ["Python", "Flask", "Docker", "Kubernetes", "RabbitMQ","OpenAPI","Sentry", "PostgreSQL"],
            companyLogo: companyLogo3,
            alt: "Cerc logo",
        },
    ];

    return (
        <section className="font-['Adagio Sans'] mr-[auto] ml-[auto] max-w-[1000px] pl-3 pr-3 pb-16 " id="experience">
            <h1 className="text-[2.3em] pt-4 pb-10 text-center text-3xl font-semibold"><Emoji className='font-normal' symbol="💼" label="briefcase" /> My Professional Experience</h1>
            <div className='lg:grid lg:grid-cols-3 lg:gap-4' id="experience-container">
                {experiences.map((experience, index) => (
                    <Experience key={index} info={experience} />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
