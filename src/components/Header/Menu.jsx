"use client";

import styles from "./Menu.module.css";

import Link from "next/link";
import React, { useState } from 'react';

export default function  Menu()  {

  const [ openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
    <div className={styles.nav}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p>メニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>メニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>メニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>メニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>メニュー</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
        </div>
      </div>
    </div>
    <div className={`${styles.drawerMenu} ${openMenu ?styles.open : undefined}`}>
      <ul>
        <div className={styles.close} onClick={() => menuFunction()}>
          <span></span>
          <span></span>
          <p>Close</p>
        </div>
        <li>
          <Link href="/">
            <p className={styles.menuTitle}>メニュー</p>
            <p className={styles.subTitle}>私のメニュー</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className={styles.menuTitle}>メニュー</p>
            <p className={styles.subTitle}>私のメニュー</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className={styles.menuTitle}>メニュー</p>
            <p className={styles.subTitle}>私のメニュー</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className={styles.menuTitle}>メニュー</p>
            <p className={styles.subTitle}>私のメニュー</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className={styles.menuTitle}>メニュー</p>
            <p className={styles.subTitle}>私のメニュー</p>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}