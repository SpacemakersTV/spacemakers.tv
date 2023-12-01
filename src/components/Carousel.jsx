import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import Slogan from './Slogan';

const Carousel = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [nextImageIndex, setNextImageIndex] = useState(1);
	const [fade, setFade] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(true);
			setTimeout(() => {
				setCurrentImageIndex(nextImageIndex);
				setNextImageIndex((nextImageIndex + 1) % images.length);
				setFade(false);
			}, 1000); // Duration of the fade effect
		}, 4000); // Interval for each image transition

		return () => clearInterval(interval);
	}, [nextImageIndex, images.length]);

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.slogan_container}>
				<Slogan />
			</div>
			
			<img
				src={`/images/projects/${images[currentImageIndex].src}`}
				alt="Current Carousel Image"
				className={`${styles.carouselImage} ${!fade ? styles.visible : ''}`}
			/>
			<img
				src={`/images/projects/${images[nextImageIndex].src}`}
				alt="Next Carousel Image"
				className={`${styles.carouselImage} ${styles.nextImage} ${fade ? styles.visible : ''}`}
			/>


		</div>
	);
};

export default Carousel;
