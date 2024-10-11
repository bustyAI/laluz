
import SubHeader from "./SubHeader";
import styles from './Header.module.css'

// Icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { GiAbstract005 } from 'react-icons/gi'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.upperNav}>
        <GiAbstract005 className={styles.logo} />
        <RxHamburgerMenu className={styles.hamburger} />
      </div>
      <SubHeader />

    </nav>
  )
}
