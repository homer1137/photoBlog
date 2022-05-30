import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import React from "react";
import Link from "next/dist/client/link";
import { IoReorderFour } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)
  console.log('open', open)
 
  return (
    <div className={styles.posfix}>
    <header className={styles.container}>
    <div className={styles.main}>
      <div className={styles.hov}>
        <Link href={"/"}>
          <a>Logo</a>
        </Link>
      </div>
      <Navbar open={open} setOpen={setOpen}/>
      <div className={styles.hov2}
      
      >
        <IoReorderFour onClick={()=>setOpen((prev)=>!prev)}/>
      </div>
    </div>
  </header>
    </div>
    
  );
}
