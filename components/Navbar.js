import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Toolbalr.module.css'
import Link from 'next/link'

const navigation = [
    { id:1, title: 'Home', path: '/'},
    { id:2, title: 'Portfolio', path: '/portfolio'},
    { id:3, title: 'Blog2', path: '/posts'},
]


export default function Navbar() {
    const {pathname} = useRouter();
    console.log('pathname', pathname)
  return (
    <div className={styles.main}>
        {navigation.map((item)=>(
        <Link key={item.id} href={item.path}>
        <a className={pathname===item.path ? styles.active2 : null}>{item.title}</a>
        </Link>))}
       
    </div>
  )
}
