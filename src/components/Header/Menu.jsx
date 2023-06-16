import styles from "./Menu.module.css";

import Link from "next/link";


const Menu = () => {

  const menuList = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 1,
      text: "Mojoについて",
      link: "/about",
    },
    {
      id: 2,
      text: "サービス内容",
      link: "/service",
    },
    {
      id: 3,
      text: "メンバー",
      link: "/member",
    },
    {
      id: 4,
      text: "研修を検討している企業や団体の方は",
      link: "/qaf",
    },
    {
      id: 5,
      text: "お問合せ",
      link: "/conact",
    },
    {
      id: 6,
      text: "クラウドファンディングで支援してくださった企業・団体と個人の皆さま",
      link: "/sponsor",
    }
  ]

  return (
    <>
      <div className={styles.main}>
        <ul>
          {
            menuList.map((item, i) => (
              <Link href={item.link} className={styles.link} key={item.id}>{item.text}</Link>
            ))

          }
        </ul>
      </div>
    </>
  )
}

export default Menu;