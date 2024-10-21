import { useState } from 'react'

import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import styles from './ArtistCard.module.css'

const tattooImages = [
  'public/tattoo-photo.jpg',
  'public/tattoo-photo-2.jpg',

]

export default function ArtistCard() {
  const [currImageIndex, setCurrImageIndex] = useState(0);

  const nextImage = () => {
    setCurrImageIndex((prevIndex) => (prevIndex + 1) % tattooImages.length)
  }

  const prevImage = () => {
    setCurrImageIndex((prevIndex) => (prevIndex - 1 + tattooImages.length) % tattooImages.length)
  }

  return (

    <div className={styles.artistCard}>
      <div className={styles.artistCardContent}>
        <div className={styles.imageCarousel}>
          <BsArrowLeftCircle className={styles.arrowIcon} onClick={prevImage} />
          <img
            className={styles.artistImage}
            src={tattooImages[currImageIndex]}
            alt='tattoo-artist' />
          <BsArrowRightCircle className={styles.arrowIcon} onClick={nextImage} />

        </div>

        <a href='#' className={styles.socialHandle}>@xhv.zyy</a>

        <h4 className={styles.jobTitle}>Positivity Princess</h4>
        <h4 className={styles.artistExperience}>20 years in positivity / making people feel good about themselves</h4>

      </div>
    </div>
  )
}
