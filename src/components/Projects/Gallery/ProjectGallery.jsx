import React from "react";

import styles from "./ProjectGallery.module.css";
import Project from "./Project";

const isNullOrempty = (value) => {
	return value === null || value === undefined || value === "";
};

const ProjectGallery = ({ projects, tags }) => {
	let filteredProjects = projects.filter((project) => {
		return tags.every((tag) => project.tags.includes(tag));
	});

	// let filteredProjects be all tags that include one of the selected tags
	// let filteredProjects = projects.filter(project => {
	// 	return tags.some(tag => project.tags.includes(tag))
	// })

	//Sort projects by date
	filteredProjects = filteredProjects.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);

	console.log(filteredProjects);

	filteredProjects = filteredProjects.filter((project) => {
		return !isNullOrempty(project.thumbnail_url) && !isNullOrempty(project.id);
	});

	return (
		<div className={styles.project_gallery}>
			{filteredProjects.map((item, index) => (
				<Project key={index} project={item} />
			))}
		</div>
	);
};

export default ProjectGallery;
