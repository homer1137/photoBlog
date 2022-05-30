import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Toolbalr.module.css";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Blog22", path: "/posts" },
];

export default function Navbar({open, setOpen}) {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      
      <div className={open?styles.main:styles.main2}
      
      // style={{
      //   display: `${open?'flex':'none'}`,
      // }}
      
      >
        {navigation.map((item) => (
          <Link key={item.id} href={item.path}>
            <a className={pathname === item.path ? styles.active2 : null}>
              {item.title}
            </a>
          </Link>
        ))}
        <IoClose onClick={()=>setOpen(prev=>!prev)} className={styles.closeIcon}
        size="250px"
        color="white"
        />
      </div>
      
    </div>
  );
}
