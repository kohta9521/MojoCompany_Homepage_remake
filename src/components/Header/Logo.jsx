import styles from "./Logo.module.css";

import Link from "next/link";


const Logo = () => {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          {/* <a className={styles.logoitem} href="">ハンバーガー</a> */}
          <p className={styles.logoitem}>mojo</p>
        </Link>
      </div>
    </>
  )
}

export default Logo;