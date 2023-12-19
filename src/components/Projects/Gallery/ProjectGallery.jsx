import React from 'react';

import styles from './ProjectGallery.module.css';
import Project from './Project';


const ProjectGallery = ({ projects, tags}) => {

	let filteredProjects = projects.filter(project => {
		return tags.every(tag => project.tags.includes(tag))
	})

	// let filteredProjects be all tags that include one of the selected tags
	// let filteredProjects = projects.filter(project => {
	// 	return tags.some(tag => project.tags.includes(tag))
	// })

	//Sort projects by date
	filteredProjects = filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

	return (
		<div className={styles.project_gallery}>
			{filteredProjects.map((item, index) => (
				<Project key={index} project={item}/>
			))}
		</div>
	);
};

export default ProjectGallery;