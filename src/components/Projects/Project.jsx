import React from "react";

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'



import ProjectModal from "./ProjectModal";

import styles from "./Project.module.css";


const arrayContains = (needle, arrhaystack) => {
    return (arrhaystack.indexOf(needle));
}

const Project = ({ project }) => {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        // router.push(`/?project=${'temp'}`, undefined, { shallow: true })
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    // console.log(thumbnailElement)


    return (
        <div className={styles.project_container}>

            {/* <img
                src={project.thumbnail_url}
                alt={project.title}
                loading="lazy"
                className={styles.project_image}
                onClick={handleOpen}
            /> */}

            <Image
                width={960}
                height={540}
                src={project.thumbnail_url}
                alt={project.title}
                className={styles.project_image}
                onClick={handleOpen}
                priority
            />
            <div className={styles.project_title}>{project.title}</div>


            <ProjectModal handleClose={handleClose} open={open} project={project} />
        </div>
    );
};

export default Project;