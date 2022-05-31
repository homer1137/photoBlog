import React from 'react'
import { portfolioArray } from '../../components/PortfolioPreview/potfoloArray';
import Image from 'next/dist/client/image';
import styles from '../../styles/ProjectDetail.module.css'

export default function projectDetail({id, title, description, picture}) {
    
  return (
      <div className={styles.container}>
      <section className={styles.main}>

      <h2>{title}</h2>
    <Image src={picture} alt={title} width={600} height={600}/>
    <div className={styles.description}>{description}</div>
      </section>
      
      </div>
    
  )
}


export const getServerSideProps = async (context) => {
    const { project } = context.params;
    
    const result = portfolioArray.filter((item)=>item.title==project)
    

    if (!result) {
        return { notFound: true };
      } else {
        return {
          props: {
            id: result[0].id,  
            title: result[0].title,
            description: result[0].description,
            picture: result[0].picture,
          },
        };
      }
    };
