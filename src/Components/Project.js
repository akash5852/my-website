import * as React from 'react';
import Card from '@mui/material/Card';
import { FaGithub } from 'react-icons/fa';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Project = (props) => {
    const info = props.info;
    const Tech = info.tech;
    const tech = Tech.map((Tech) => {
        return <p className=' bg-sky-500 text-white mr-2 rounded-full pl-3 pr-3'>{Tech}</p>;
    });
    const Buttons = () => {
        if (info.link) {
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
                    </Button>
                </>
            )
        }
    }

    return (
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
                            {info.title}

                        </Typography>
                        <div className='pb-2 flex  text-[0.48rem] xs:text-xs' >
                            {tech}
                        </div>

                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Buttons />
                    
                </CardActions>
            </Card>
        </div>
    );
}
export default Project;
