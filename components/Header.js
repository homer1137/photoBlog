import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import React from "react";
import Link from "next/dist/client/link";
import { IoReorderFour } from "react-icons/io5";

export default function Header() {
  return (
    <div className={styles.posfix}>
    <header className={styles.container}>
    <div className={styles.main}>
      <div className={styles.hov}>
        <Link href={"/"}>
          <a>Logo</a>
        </Link>
      </div>
      <Navbar />
      <div className={styles.hov2}>
        <IoReorderFour/>
      </div>
    </div>
  </header>
    </div>
    
  );
}
