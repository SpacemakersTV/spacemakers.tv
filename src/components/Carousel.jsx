"use client";

import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
// import "./Carousel.css";
import Slogan from "./Slogan";

import Image from 'next/image'


const Carousel = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		// Automatically advance to the next image every 5 seconds
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [images]);

	const backgroundImageStyle = {
		backgroundImage: `url(/images/projects/${images[currentImageIndex]})`,
	  };

	return (
		<div className={'carousel_container'}>


			<div
				className={styles.background_image_container}
				style={backgroundImageStyle}
				alt={`Image ${currentImageIndex + 1}`}
			/>


			<div className={styles.slogan_container}>
				<Slogan/>
			</div>
		</div >
	);
};

export default Carousel;
