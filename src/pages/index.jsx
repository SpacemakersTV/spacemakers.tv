import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Slogan from '../components/Slogan';

import 'swiper/css';
import 'swiper/css/effect-fade';

import styles from './Index.module.css';

const images = [
    '/images/landing/asa_moto.jpeg',
    '/images/landing/ccd.jpg',
    '/images/landing/obscuur.jpg',
    '/images/landing/nye.jpg',
    '/images/landing/technology.jpg'
];

const Home = () => {
    return (
        <React.Fragment>

            <div className={styles.slogan_container}>
                <Slogan />
            </div>

            <Swiper slidesPerView={1}
                modules={[EffectFade, Autoplay]}
                effect="fade"
                className={styles.container}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {images.map((el, key) => {

                    return <SwiperSlide key={key}>
                        <img
                            src={el}
                            alt="Current Carousel Image"
                            className={styles.carouselImage}
                        />
                    </SwiperSlide>;
                })}
            </Swiper>
        </React.Fragment>
    )
}

export default Home;