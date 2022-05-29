import Header from './Header'
import Head from "next/head";
import React from 'react'

export default function Layout({children}) {
  return (
    <>
        <Head>
      
        </Head>
        
        <Header/>
        {children}
    </>
  )
}
