import ArtistCard from './ArtistCard'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <AnimationOnScroll animateOnce={true} animateIn={styles.fadeInUp}>
        <div className={styles.meetOurArtist}>
          <h1>meet our artist</h1>
        </div>
      </AnimationOnScroll>

      <div className={styles.heroContainer}>
        <div className={styles.artistCardContainer}>
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </>
  )
}
