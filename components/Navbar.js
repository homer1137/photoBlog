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
  const router = useRouter();
  return (
    <div className={styles.container}>
      
      <div className={open?styles.main:styles.main2}
      
    
      
      >
        {navigation.map((item) => (
          <div key={item.id} href={item.path} onClick={()=>{router.push(`${item.path}`)
          setOpen(prev=>!prev)
        }}>
            <a className={pathname === item.path ? styles.active2 : null}>
              {item.title}
            </a>
          </div>
        ))}
        <IoClose onClick={()=>setOpen(prev=>!prev)} className={styles.closeIcon}
        size="250px"
        color="white"
        />
      </div>
      
    </div>
  );
}
