import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Data {
  _id: string;
  title: string;
  desc: string;
  image: string;
}

export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

async function Blog() {
  const data: Data[] = await getData();
  return (
    <div className={styles.container}>
      {data.map(({ _id, title, image, desc }) => (
        <Link href={`/blog/${_id}`} className={styles.item} key={_id}>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={image} alt="" fill={true} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>{title}</h2>
            <p className={styles.contentDescription}>{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
