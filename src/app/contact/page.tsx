import React, { CSSProperties } from "react";
import Image from "next/image";
import contactImage from "/public/contact.webp";
import CustomButton from "@/components/customButton/CustomButton";
import styles from "./page.module.css";

function Contact() {
  const buttonStyle: CSSProperties = { padding: "20px 50px" };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&rsquo;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={contactImage}
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <CustomButton title="Send" style={buttonStyle} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
