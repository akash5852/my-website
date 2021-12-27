import Emoji from 'a11y-react-emoji'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs'

const Home = () => {
    const experiences = ['Java', 'Python', 'JavaScript', 'C', 'C++', 'HTML/CSS', 'Node.js', 'React', 'MongoDB', 'Express.js', 'Google Cloud Platform', 'MySQL'];
    const listItems = experiences.map((myList) => {
        return <li>&ensp; <Emoji symbol="•" label="star" /> &nbsp;{myList}</li>;
    });
  
    const hobbies = [`Cruise on my Penny Skateboard`, 'Watch movies and TV shows', 'Work out and try to achieve my dream physique', 'Listen to lots of music', 'Play video games such as Valorant with friends'];
    const listHobbies = hobbies.map((hobbies) => {
        return <li>&ensp; <Emoji symbol="•" label="star" /> &nbsp;{hobbies}</li>;
    });

    return (
        <>
            <section className="font-['Mada'] mr-[auto] ml-[auto] max-w-[1000px] pb-16" id="about-me">
                <div className="display flex align-middle justify-center" id="pic-and-title">
                    <img className="w-[11rem] rounded-full " src="https://chandra.harvard.edu/photo/2011/a2744/a2744.jpg" alt="pic of me" />
                </div>
                <h1 className="tall:text-[2.3em] pt-4 pb-4 text-center text-3xl font-semibold"><Emoji symbol="👋" label="wave" /> Hey, I'm Akash <br/>Welcome to my website! </h1>
                <div className='pl-5 pr-5' id="main-section">
                    <div className='text-[1.5em] text display flex align-middle justify-center' id="icons">
                        <a rel="author" href="https://github.com/akash5852"><FaGithub className='hover:text-sky-500 ease-linear transition duration-300' /></a>
                        <p>&ensp;</p>
                        <a rel="author" href="https://www.linkedin.com/in/akash5852"><FaLinkedin className='hover:text-sky-500 ease-in transition duration-300' /></a>
                        <p>&ensp;</p>
                        <a rel="author" href="mailto:aksha5852@gmail.com"><FaEnvelope className='hover:text-sky-500 ease-in transition duration-300' /></a>
                        <p>&ensp;</p>
                        <a rel="author" href="https://www.instagram.com/hiakash14/"><FaInstagramSquare className='hover:text-sky-500 ease-in transition duration-300' /></a>
                        <p>&ensp;</p>
                        <a rel="resume" href="https://www.instagram.com/hiakash14/"><BsFillFileEarmarkPersonFill className='hover:text-sky-500 ease-in transition duration-300' /></a>

                    </div>
                    <div className='text-[0.85em] sm:text-[1.1em] tall:text-[1.9em]'>
                        <p className="text-left">
                            I'm a second year Computer Engineering student at McMaster University with a passion for developing software that improves lives.
                        </p>
                        <p className="text-left pt-5">
                            I'm currently exploring the world of full stack development, and have experience in:<br></br>
                            <ul className="display inline-block">
                                {listItems.slice(0, 3)}
                            </ul>
                            <ul className="lg:pl-3 display inline-block">
                                {listItems.slice(3, 6)}
                            </ul>
                            <ul className="lg:pl-3 display inline-block">
                                {listItems.slice(6, 9)}
                            </ul>
                            <ul className="lg:pl-3 display inline-block">
                                {listItems.slice(9, 12)}
                            </ul>
                        </p>
                        <p className="text-left pt-5">
                            In my free time I love to:
                            <ul>
                                {listHobbies}
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Home;