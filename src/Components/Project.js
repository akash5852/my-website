import * as React from 'react';
import Card from '@mui/material/Card';
import { FaGithub } from 'react-icons/fa';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaPaperclip } from "react-icons/fa";
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
                    <Button href={info.gitlink} size="large" color="primary">
                        <FaGithub />
                    </Button>

                    <Button href={info.link} size="large" color="primary">
                        <FaPaperclip />
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <Button href={info.gitlink} size="large" color="primary">
                        <FaGithub />
                    </Button>
                </>
            )
        }
    }

    return (
        <div className="flex justify-center pb-10 pl-2 pr-2">
            <Card className="text-left max-w-[425px]" >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.image}
                        alt={info.imageALT}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.title}
                        </Typography>
                        <div className='pb-2 flex  text-[0.48rem] xs:text-xs' >
                            {tech}
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {info.desc}
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
