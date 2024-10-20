import ArtistCard from './ArtistCard'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <>
      <div className={styles.meetOurArtist}>
        <h1>meet our artist</h1>
      </div>

      <div className={styles.heroContainer}>

        <div className={styles.artistCardContainer}>
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </>
  )
}
