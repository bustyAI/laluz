import styles from './ArtistCard.module.css'

export default function ArtistCard() {
  return (

    <a className={styles.artistCard}>
      <div className={styles.artistCardContent}>

        <img className={styles.artistImage} src='./tattoo-artist.jpg' alt='tattoo-artist' />

        <h4 className={styles.socialHandle}>@xhv.zyy</h4>

        <h4 className={styles.jobTitle}>Positivity Princess</h4>
        <h4 className={styles.artistExperience}>20 years in positivity / making people feel good about themselves</h4>

      </div>
    </a>
  )
}
