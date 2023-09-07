import React, { useState } from 'react';
import styles from './ImageCarousel.module.css'; // Create this CSS file for styling

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={`${styles.image_carousel}`} >
      <button onClick={goToPrevSlide} className={`${styles.arrow_button} ${styles.prev}`} >
        &lt;
      </button>
      <img src={`/images/projects/${images[currentIndex]}`} alt={`Image ${currentIndex}`} />
      <button onClick={goToNextSlide} className={`${styles.arrow_button} ${styles.next}`} >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
