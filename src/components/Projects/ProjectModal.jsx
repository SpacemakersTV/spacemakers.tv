import {React, useRef} from "react";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';

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
                        <ModalClose/>
                        <div className={styles.modal_container}>
                            <div className={styles.modal_text_container}>
                                <h1 className={styles.modal_title}>{project.project_title}</h1>
                                <p className={styles.modal_description}>{project.project_description}</p>
                            </div>

                            <div className={styles.modal_images_container}>
                                {project.project_images.map((image, index) => (
                                    <img key={index} src={`/images/projects/${image}`} className={styles.modal_img} />
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
