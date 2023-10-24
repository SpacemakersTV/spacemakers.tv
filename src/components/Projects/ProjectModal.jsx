import { React, useRef } from "react";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import parse from 'html-react-parser';

import Image from "next/image";

import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';


import styles from "./ProjectModal.module.css";

// Function to determine video orientation
const videoOrientation = (video) => {
    // Assume the video is landscape by default
    let orientationClass = styles.landscape;
    const videoElement = document.createElement('video');

    videoElement.src = video;
    videoElement.addEventListener('loadedmetadata', () => {
        if (videoElement.videoHeight > videoElement.videoWidth) {
            orientationClass = styles.portrait;
        }
    }, false);

    return orientationClass;
}

const ProjectModal = (props) => {
    const project = props.project;


    const handleClose = () => {
        props.handleClose();
    };

    return (

        props.open && (
            <Modal layout='fullscreen' open={true} onClose={handleClose} >
                <ModalOverflow>
                    <ModalDialog layout='fullscreen' aria-labelledby="layout-modal-title" aria-describedby="layout-modal-description" className={styles.modal}>
                        <ModalClose />
                        <div className={styles.modal_container}>
                            <div className={styles.modal_text_container}>
                                <h1 className={styles.modal_title}>{project.title}</h1>
                                <p className={styles.modal_description}>{parse(project.description)}</p>


                            </div>

                            <div className={styles.modal_images_container}>

                                {project.video_links.length !== 0 && project.video_links.map((video, index) => (
                                    <div key={index} className={`${styles.video_wrapper} ${videoOrientation(video)}`}>
                                        <MediaPlayer
                                            muted
                                            className={styles.media_player}
                                            controls
                                            title={project.title}
                                            src={[{ src: video, type: 'video/mp4' }]}
                                        >
                                            <MediaProvider />
                                        </MediaPlayer>
                                    </div>
                                ))}

                                {project.image_links.map((image, index) => (
                                    // <img key={index} src={image} className={styles.modal_img} />

                                    <img
                                        key={index}
                                        // width={960}
                                        // height={540}
                                        src={image}
                                        alt={project.title}
                                        className={styles.modal_img}
                                    // priority
                                    />

                                    // <Image
                                    //     key={index}
                                    //     src={image}
                                    //     alt={project.title}
                                    //     width={960} // Adjust based on your needs
                                    //     height={540} // Adjust based on your needs
                                    //     className={styles.modal_img}
                                    // />
                                ))}
                            </div>
                        </div>
                    </ModalDialog>
                </ModalOverflow>
            </Modal>
        )
    );
};

export default ProjectModal;
