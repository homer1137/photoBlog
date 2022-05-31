import React from "react";
import styles from "../../styles/Post.module.css";
import  imageUrlBuilder  from "@sanity/image-url";
import {useState, useEffect} from 'react';
import BlockContent from '@sanity/block-content-to-react'



export default function Post({ title, body, author, data, image }) {
  
  let dataTrue = data.toString()
  
    const [imageUrl, setImageUrl] = useState('');
  useEffect(()=>{
      const imgBuilder = imageUrlBuilder({
          projectId: 'eo9hu5tw',
          dataset: 'production',
      })
      setImageUrl(imgBuilder.image(image))
  }, [image])

  return (
    <>
      <div className={styles.main}>
        <div>{dataTrue }</div>
        <h1> {title} </h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl}/>}
        <div className={styles.body}>
            <BlockContent blocks={body}/>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  if (!slug) {
    return { notFound: true };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${slug}" ]`
  );

  const url = `https://eo9hu5tw.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        author: {
            _ref: post.author._ref
          },
        image: post.mainImage,
        data: post.publishedAt,
      },
    };
  }
};
