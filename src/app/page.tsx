import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.webp";
import CustomButton from "@/components/customButton/CustomButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <CustomButton url="/portfolio" title="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src={hero}
          alt="hero"
          className={styles.heroImage}
          priority={true}
        />
      </div>
    </div>
  );
}
