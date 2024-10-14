import ArtistCard from './ArtistCard'

import { GoArrowDown } from 'react-icons/go'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.meetOurArtist}>
        <h3>meet our artist:</h3>
        <h3><GoArrowDown /></h3>
      </div>
      <div className={styles.artistCardContainer}>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
    </div>
  )
}
