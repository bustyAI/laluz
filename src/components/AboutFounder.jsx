import About from "./About"
import Founder from "./Founder"

import styles from "./AboutFounder.module.css"

export default function AboutFounder() {
  return (
    <div className={styles.aboutFounderContainer}>
      <About />
      <Founder />
    </div>
  )
}
