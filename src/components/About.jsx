
import styles from './About.module.css'

const aboutUs = {
  "01": "Custom tattoo designs",
  "02": "Expert artists team",
  "03": "Safe, sterile environment",
  "04": "Located downtown center",

}

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>

        <div className={styles.aboutHeadings}>
          <div>
            <h3>We Help</h3>
          </div>
          <div>
            <h3>Tattoo People</h3>
          </div>
        </div>

        <div className={styles.aboutUs}>

          {Object.entries(aboutUs).map(([key, value]) => (
            <div className={styles.aboutUsContent} key={key}>
              <div>
                <h3 className={styles.aboutUsNumber}>{key}</h3>
              </div>
              <div style={{ width: '100%' }}>
                <h3 className={styles.aboutUsText}>{value}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
