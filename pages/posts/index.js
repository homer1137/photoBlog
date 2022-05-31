import React, { useState, useEffect } from "react";
import styles from "../../styles/Posts.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/dist/client/router";


export default function Blog({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "eo9hu5tw",
        dataset: "production",
      });

      setMappedPosts(posts.map(it=>({
          ...it,
          mainImage: imgBuilder.image(it.mainImage).width(500).height(250),
      })))
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div className={styles.container}>
    
    <div className={styles.main}>
      <h1>Welcom to my sily life (Blog)</h1>

      <h3>Recent posts:</h3>
      <div className={styles.feed}>{
          mappedPosts.length? mappedPosts.map((p, index)=>(
              <div onClick={()=>router.push(`/posts/${p.slug.current}`)} key={index} className={styles.post}>
                <h3>{p.title}</h3>
                <img className={styles.mainImage} src={p.mainImage}/>
              </div>
          )): <>no data</>
      }</div>
    </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type=="post" ]');
  const url = `https://eo9hu5tw.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  if (!result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
