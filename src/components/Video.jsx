import styles from './Video.module.css'

export default function Video() {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop>
        <source src='public\tattoo-vid.mp4' type='video/mp4' />
        Browser Does not support the video tag.
      </video>
      <div className={styles.videoTextContainer}>
        <p className={styles.videoText}>La Luz Tattoo</p>
      </div>
    </div>
  )
}