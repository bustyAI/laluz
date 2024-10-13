
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './Founder.module.css'

export default function Founder() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn={styles.bringUp} offset={60}>
      <div className={styles.parentContainer}>
        <div className={styles.founderContainer}>
          <div>
            <img className={styles.founder} src='./tattoo-artist.jpg' alt="tattoo-artist" />
          </div>
          <div className={styles.founderInfo}>
            <p>Robert Pesina</p>
            <p>Founder/Tattoo Artist</p>
          </div>
          <div className={styles.shopInfo}>
            <p>c23 Labs was created to mentor emerging tattoo artists with coaching, courses and the necessary tools they need to succeed. </p>
          </div>
        </div>
      </div>

    </AnimationOnScroll>

  );
}