import React from "react";
import one from "public/1.webp";
import two from "public/2.webp";
import three from "public/3.webp";
import four from "public/4.webp";
import styles from "./footer.module.css";
import Image from "next/image";

const iconsData = [
  {
    id: 1,
    alt: "facebook",
    image: one,
  },
  {
    id: 2,
    alt: "instagram",
    image: two,
  },
  {
    id: 3,
    alt: "twitter",
    image: three,
  },
  {
    id: 4,
    alt: "youtube",
    image: four,
  },
];

function Footer() {
  const objectDate = new Date();

  return (
    <div className={styles.container}>
      <div>©{objectDate.getFullYear()} All right reserved.</div>
      <div className={styles.social}>
        {iconsData.map(({ id, alt, image }) => (
          <div key={id}>
            <Image src={image} alt={alt} className={styles.social_icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
