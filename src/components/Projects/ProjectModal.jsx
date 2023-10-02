import { React, useRef } from "react";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import parse from 'html-react-parser';
import Image from "next/image";


import styles from "./ProjectModal.module.css";

const ProjectModal = (props) => {
    // const [layout, setLayout] = React.useState('fullscreen');
    // const dummy = useRef(null);

    // useEffect(() => {
    //     dummy.current.scrollIntoView({ behavior: "smooth" });
    // }, [messages]);

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
                                {/* <iframe src="https://drive.google.com/uc?id=1vL-L7kOWonTrI4IkhD2ZyN-OnMUWV42V" width="640" height="480" allow="autoplay"></iframe> */}
                            </div>

                            <div className={styles.modal_images_container}>
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
