import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import bg1 from "/public/illustration.webp";
import bg2 from "/public/websites.webp";
import bg3 from "/public/apps.webp";

const portfolio = [
  { id: 1, title: "Illustrations", url: "/portfolio/illustrations", back: bg1 },
  { id: 2, title: "Websites", url: "/portfolio/websites", back: bg2 },
  { id: 3, title: "Application", url: "/portfolio/application", back: bg3 },
];

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.items}>
        {portfolio.map(({ id, title, url, back }) => {
          return (
            <Link
              key={id}
              href={url}
              className={styles.item}
              style={{ background: `url(${back.src})` }}
            >
              <span className={styles.linkTitle}>{title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
