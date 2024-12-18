
import styles from './About.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const aboutUs = {
  "01": "Custom tattoo designs",
  "02": "Expert artists team",
  "03": "Safe, sterile environment",
  "04": "Located downtown center",

}

const offsets = {
  "01": 20,
  "02": 20,
  "03": 20,
  "04": 20,
}

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutHeadings}>
          <div>
            <h3>We help</h3>
          </div>
          <div>
            <h3>tattoo people</h3>
          </div>
        </div>


        <div className={styles.aboutUs}>
          {Object.entries(aboutUs).map(([key, value]) => (
            <AnimationOnScroll animateOnce={true} offset={offsets[key]} animateIn={styles.fadeInUp} key={key}>
              <div className={styles.aboutUsContent} >
                <div>
                  <h5 className={styles.aboutUsNumber}>{key}</h5>
                </div>
                <div style={{ width: '100%' }}>
                  <h5 className={styles.aboutUsText}>{value}</h5>
                </div>
              </div>
            </AnimationOnScroll>
          ))}
        </div>

      </div >

    </section >
  )
}
