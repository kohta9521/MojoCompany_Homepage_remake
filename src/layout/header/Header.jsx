import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.main}>
        <Logo />
        <Menu />
      </div>
    </>
  )
}

export default Header;