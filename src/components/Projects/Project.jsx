import React from "react";

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProjectModal from "./ProjectModal";

import styles from "./Project.module.css";


const arrayContains = (needle, arrhaystack) => {
    return (arrhaystack.indexOf(needle));
}

const Project = ({ project }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const thumbnailElement = project.project_images.find(imageName => imageName.includes('thumbnail'));


    console.log(thumbnailElement)


    return (
        <div className={styles.project_container}>

            <img
                src={`/images/projects/${thumbnailElement}`}
                // srcSet={`/images/projects/${project.project_images[0]}?w=162&auto=format&dpr=2 2x`}
                alt={project.project_title}
                loading="lazy"
                className={styles.project_image}
                onClick={handleOpen}
            />
            <div className={styles.project_title}>{project.project_title}</div>


            <ProjectModal handleClose={handleClose} open={open} project={project} />
        </div>
    );
};

export default Project;