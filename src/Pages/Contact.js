import Emoji from 'a11y-react-emoji'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';


const Calendly = () => {
    return (
        <div className='flex justify-center' style={{ height: "800px" }}>
            <iframe title="Calendly"
                src="https://calendly.com/shara98"
                width="75%"
                height="100%"
                frameborder="0"
            ></iframe>
        </div>
    );
};

const Contact = () => {
    return (
        <>
            <section className="font-['Adagio Sans'] mr-[auto] ml-[auto] max-w-[1000px] pb-16" id="contact-me">
                <h1 className="tall:text-[2.3em] pt-4 pb-10 text-center text-3xl font-semibold"><Emoji className='font-normal' symbol="🤝" label="star" /> Lets Connect!</h1>
                <h2 className='text-[1.5em] pb-3'>You can contact me with my social media links below or book a meeting with me using Calendly</h2>

                <div className='text-[2em] text display flex align-middle justify-center' id="icons">
                    <a rel="author" href="https://github.com/akash5852"><FaGithub className='hover:text-sky-500 ease-linear transition duration-300' /></a>
                    <p>&ensp;</p>
                    <a rel="author" href="https://www.linkedin.com/in/akash5852"><FaLinkedin className='hover:text-sky-500 ease-in transition duration-300' /></a>
                    <p>&ensp;</p>
                    <a rel="author" href="mailto:aksha5852@gmail.com"><FaEnvelope className='hover:text-sky-500 ease-in transition duration-300' /></a>
                    <p>&ensp;</p>
                    <a rel="author" href="https://www.instagram.com/hiakash14/"><FaInstagramSquare className='hover:text-sky-500 ease-in transition duration-300' /></a>
                </div>

                <Calendly />
            </section>
        </>
    );
};

export default Contact;