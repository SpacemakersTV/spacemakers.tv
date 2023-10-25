import { React, useRef,useEffect } from "react";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import parse from 'html-react-parser';

import Image from "next/image";


import styles from "./ProjectModal.module.css";

// Function to determine video orientation
const videoOrientation = (videoElement) => {
    // Assume the video is landscape by default
    let orientationClass = styles.landscape;

    videoElement.addEventListener('loadedmetadata', () => {
        if (videoElement.videoHeight > videoElement.videoWidth) {
            orientationClass = styles.portrait;
        }
    }, false);

    return orientationClass;
}

const ProjectModal = (props) => {
    const project = props.project;

    // const videoRefs = useRef(props.project.video_links.map(() => useRef()));

    // useEffect(() => {
    //     // Update the orientation class for each video element
    //     videoRefs.current.forEach((ref, index) => {
    //         if (ref.current) {
    //             const orientationClass = videoOrientation(ref.current);
    //             ref.current.classList.add(orientationClass);
    //         }
    //     });
    // }, []);


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
                                    <video
                                        // ref={videoRefs.current[index]}
                                        key={index}
                                        src={video}
                                        className={styles.modal_video}
                                        controls
                                    />
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
