import styles from './ArtistCard.module.css'

export default function ArtistCard() {
  return (

    <div className={styles.artistCard}>

      <img className={styles.artistImage} src='./tattoo-artist.jpg' alt='tattoo-artist' />
      <h4 className={styles.artistName}>Hannah Pesina</h4>

      <h4 className={styles.jobTitle}>Positivity Princess</h4>
      <a href='#'>
        <h4 className={styles.socialHandle}>@xhv.zyy</h4>
      </a>
    </div>
  )
}
