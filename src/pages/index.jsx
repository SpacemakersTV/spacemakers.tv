import React, { useRef } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Slogan from "../components/Slogan";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./Index.module.css";

const images = [
	"/images/landing/asa_moto.jpeg",
	"/images/landing/ccd.jpg",
	"/images/landing/obscuur.jpg",
	"/images/landing/nye.jpg",
	"/images/landing/technology.jpg",
];

const Home = () => {
	const swiperRef = useRef(null);

	const handleImageClick = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	return (
		<React.Fragment>
			<div className={styles.slogan_container}>
				<Slogan />
			</div>

			<Swiper
				loop={true}
				slidesPerView={1}
				modules={[EffectFade, Autoplay]}
				effect="fade"
				className={styles.container}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}>
				{images.map((el, key) => {
					return (
						<SwiperSlide key={key}>
							<img
								src={el}
								alt={el.split("/").pop().split(".")[0]}
								className={styles.carouselImage}
								onClick={handleImageClick}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</React.Fragment>
	);
};

export default Home;
