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
		// backgroundImage: `url(https://storage.googleapis.com/spacemakers_site/15Th9KVeN8W_OBjRoPwg8a1Rtn_SlN5hb)`,
	};

	return (
		<div className={'carousel_container'}>


			<div
				className={styles.background_image_container}
				style={backgroundImageStyle}
				alt={`Image ${currentImageIndex + 1}`}
			/>

			{/* <Image></Image> */}

			{/* <img src={`/images/projects/${images[currentImageIndex]})`} alt="" /> */}


			<div className={styles.slogan_container}>
				<Slogan />
			</div>
		</div >
	);
};

export default Carousel;
