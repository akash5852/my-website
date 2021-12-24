import Emoji from 'a11y-react-emoji'
const Home = () => {
    const experiences = ['Java', 'Python', 'JavaScript', 'C', 'C++', 'HTML/CSS', 'Node.js', 'React', 'MongoDB', 'Express.js', 'Google Cloud Platform', 'MySQL'];
    const listItems = experiences.map((myList) => {
        return <li>&ensp; <Emoji symbol="★" label="star" /> &nbsp;{myList}</li>;
    });
    const hobbies = ['Cruise on my Penny Skateboard', 'Watch movies and TV shows', 'Work out and try to achieve my dream physique', 'Play video games such as Valorant with friends'];
    const listHobbies = hobbies.map((hobbies) => {
        return <li>&ensp; <Emoji symbol="★" label="star" /> &nbsp;{hobbies}</li>;
    });

    return (
        <>
            <section className="mr-[auto] ml-[auto] max-w-[1000px] pb-20" id="about-me">
                <div className="display flex align-middle justify-center" id="pic-and-title">
                    <img className="w-[9rem] rounded-full " src="https://chandra.harvard.edu/photo/2011/a2744/a2744.jpg" alt="pic of me" />
                </div>
                <h1 className="pt-4 pb-4 text-center text-3xl font-bold "><span className=" font-normal" role="img" aria-label="wave">👋</span> Hey, I'm Akash <br />Welcome to my website! </h1>
                <div className='pl-5 pr-5' id="main-section">
                    <p className="text-left">
                        I'm a second year Computer Engineering student at McMaster University.
                    </p>
                    <p className="text-left pt-5">
                        I'm currently learning xyz, and have experience in:<br></br>
                        <ul className="display inline-block">
                            {listItems.slice(0, 3)}
                        </ul>
                        <ul className="display inline-block">
                            {listItems.slice(3, 6)}
                        </ul>
                        <ul className="display inline-block">
                            {listItems.slice(6, 9)}
                        </ul>
                        <ul className="display inline-block">
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
            </section>
        </>
    );

};

export default Home;