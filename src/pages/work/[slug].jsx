import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container, Loader } from "semantic-ui-react";
import { FiArrowLeft } from "react-icons/fi";

import parse from "html-react-parser";

import styles from "./project.module.css";

const getProjectById = (projects, id) => {
	return projects.find((project) => project.id === id);
};

export default function Page(props) {
	const router = useRouter();
	const { slug } = router.query; // Destructure slug for easier usage

	const [project, setProject] = useState(null);

	// This useEffect will run when `slug` is changed
	useEffect(() => {
		if (slug) {
			const projectData = getProjectById(props.projects, slug);
			setProject(projectData);
		}
	}, [slug, props.projects]);

	// Render loading state if slug or project is not yet loaded
	if (!slug || !project) {
		return <Loader active />;
	}

	const handleBack = () => {
		router.push("/work");
	};

	return (
		<Container fluid>
			<div className={styles.modal_container}>
				<FiArrowLeft className={styles.back_button} onClick={handleBack} />
				<div className={styles.modal_text_container}>
					<h1 className={styles.modal_title}>{project.title}</h1>
					<p className={styles.modal_description}>
						{parse(project.description)}
					</p>
				</div>

				<div className={styles.modal_images_container}>
					{project.video_links.length !== 0 &&
						project.video_links.map((video, index) => (
							<video
								// ref={videoRefs.current[index]}
								key={index}
								src={video}
								className={styles.modal_video}
								controls
							/>
						))}

					{/* <div className={styles.photo_container}> */}
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
					{/* </div> */}
				</div>
			</div>
		</Container>
	);
}
