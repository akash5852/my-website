import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { FaLinkedin } from "react-icons/fa"; // Assuming you might link to a LinkedIn profile

const Experience = (props) => {
    const { title, company, duration, desc, tech, companyLogo, alt } = props.info;

    const technologies = tech.map((technology, index) => (
        <p key={index} className='bg-sky-500 text-white mr-2 mb-2 rounded-full pl-3 pr-3 inline-block'>
            {technology}
        </p>
    ));

    return (
        <div className="flex justify-center pb-10 pl-2 pr-2">
            <Card className="text-left max-w-[425px]" >
                <CardMedia
                    component="img"
                    sx={{
                        height: 220, // Height is fixed to 80px
                        width: 'auto', // Width will be auto to maintain aspect ratio
                        objectFit: 'cover', // This will cover the area without distorting the image
                        margin: 'auto' // This centers the image within the card
                    }}
                    image={companyLogo}
                    alt={alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {duration}
                    </Typography>
                    <div className='pb-2 flex flex-wrap text-[0.48rem] xs:text-xs'>
                        {technologies}
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    
                </CardActions>
            </Card>
        </div>
    );
}

export default Experience;
