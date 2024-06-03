import React from "react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	const router = useRouter();

	const handleOpen = () => {
		if (project?.id === undefined)
			return console.log("Project ID is undefined");

		router.push(
			{
				pathname: `/work/${project.id}`,
				query: { project: project },
			},
			`/work/${project.id}`
		);
	};

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
				// priority
				loading="lazy"
				placeholder="blur"
				blurDataURL={`/_next/image?url=${project.thumbnail_url}&w=10&q=10`}
			/>
			<div className={styles.project_title}>{project.title}</div>
		</div>
	);
};

export default Project;
