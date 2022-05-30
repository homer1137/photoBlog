import React from "react";
import Image from "next/image";

import styles from "../../styles/PortfolioPreview.module.css";
import { portfolioArray } from "./potfoloArray";

export default function PortfolioPreview() {
  return (
    <>
      <div className={styles.container}>
        <h2>portfolio pictures</h2>
        <div className={styles.flexContainer}>
          {portfolioArray.map((item) => (
            <div key={item.id} className={styles.productContainer}>
            <div className={styles.imageWrapper}>
            <Image
                
                src={item.picture}
                height={250}
                width={350}
                objectFit="cover"
                alt={item.title}
                className={styles.image}
              />
            </div>  
            
              <div className={styles.titleName}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
