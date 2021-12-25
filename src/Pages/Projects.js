import * as React from 'react';
import Card from '@mui/material/Card';
import { FaGithub } from 'react-icons/fa';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Emoji from 'a11y-react-emoji'

const props = {
    link: "fdasf"
}
const title = 'Connect 4';
const description = 'Conect 4 is awesome game souper cool fdsafdsafsadfffffffffasdfasdfasdfsdfsdafsadfsadfsdafsadfasd fdsfasdfasdf asfdfsadf'
const hobbies = [`React`, 'JavaScript', 'Tailwind', 'Express', 'Mongo'];
const listHobbies = hobbies.map((hobbies) => {
    return <p className=' bg-sky-500 text-white mr-2 rounded-full pl-3 pr-3'>{hobbies}</p>;
});
const Buttons = () => {
    if (props.link) {
        return (
            <>
                <Button size="large" color="primary">
                    <FaGithub />
                </Button>

                <Button size="large" color="primary">
                    <FaGithub />
                </Button>
            </>
        )
    } else {
        return (
            <>
                <Button size="large" color="primary">
                    <FaGithub />
                </Button> </>)
    }
}
const Projects = () => {
    return (
        <>
            <section className="font-['Mada'] mr-[auto] ml-[auto] max-w-[1000px] pl-3 pr-3 pb-16 " id="about-me">
                <h1 className="tall:text-[2.3em] pt-4 pb-10 text-center text-3xl font-semibold"><Emoji className='font-normal' symbol="👨‍💻" label="star" /> Some of my favourite projects</h1>
                <div className="flex justify-center pb-10">
                    <Card className="text-left max-w-[425px]" >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://scx2.b-cdn.net/gfx/news/2017/theoreticala.jpg"
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard

                                </Typography>
                                <div className='pb-2 flex  text-[0.48rem] xs:text-xs' >
                                    {listHobbies}
                                </div>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="">
                            <Buttons/>

                        </CardActions>
                    </Card>
                </div>
                
            </section>

        </>
    );

};

export default Projects;