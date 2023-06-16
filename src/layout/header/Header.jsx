import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";
import header from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={header.main}>
        <Logo />
        <Menu />
      </div>
    </>
  )
}

export default Header;