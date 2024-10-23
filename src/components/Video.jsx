import styles from './Video.module.css'

export default function Video() {
  return (
    <div className={styles.videoContainer}>
      <img src='/tattoo-vid.gif' alt='tattoo-video' />
      <div className={styles.videoTextContainer}>
        <div className={styles.videoText}>La Luz Tattoo</div>
      </div>
    </div>
  )
}