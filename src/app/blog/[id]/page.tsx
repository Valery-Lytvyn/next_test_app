import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ParamsData {
  id: string;
}
interface Params {
  params: ParamsData;
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export const generateMetadata = async ({ params }: Params) => {
  const { title, desc } = await getData(params.id);
  return {
    title,
    desc,
  };
};

async function BlogPost({ params }: Params) {
  const data = await getData(params.id);
  const { title, desc, image, username, content } = data;

  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.desc}>{desc}</p>
              <div className={styles.author}>
                <Image
                  src={image}
                  alt={username}
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>{username}</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                alt={title}
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogPost;
