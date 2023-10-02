import React from 'react';

import Masonry from '@mui/lab/Masonry';

import styles from './ProjectGallery.module.css';
import Project from './Project';


const ProjectGallery = ({ projects }) => {
	return (
		<div className={styles.project_gallery}>

			{/* <Masonry columns={2} spacing={1}> */}
				{projects.map((item, index) => (
					<Project key={index} project={item} />
				))}
			{/* </Masonry> */}

		</div>
	);
};

export default ProjectGallery;