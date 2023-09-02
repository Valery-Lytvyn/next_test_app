import React, { CSSProperties } from "react";
import styles from "./customButton.module.css";
import Link from "next/link";

interface CustomButtonProps {
  title: string;
  url?: string;
  style?: CSSProperties;
}

function CustomButton({ title, url, style }: CustomButtonProps) {
  return (
    <Link href={url ? url : ""}>
      <button className={styles.button} style={style}>
        {title}
      </button>
    </Link>
  );
}

export default CustomButton;
