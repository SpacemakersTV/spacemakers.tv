import React from "react";

import styles from "./Project.module.css";

const Project = ({ project }) => {
    return (
        <div className={styles.project_container}>

            <img
                src={`/images/projects/${project.project_images[0]}?w=162&auto=format`}
                srcSet={`/images/projects/${project.project_images[0]}?w=162&auto=format&dpr=2 2x`}
                alt={project.project_title}
                loading="lazy"
                className={styles.project_image}
            />
            <div className={styles.project_title}>{project.project_title}</div>

        </div>
    );
};

export default Project;