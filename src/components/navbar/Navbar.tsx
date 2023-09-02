import Link from "next/link";
import React from "react";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { navbarLinks } from "./navbarData";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        NEXT-JS
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {navbarLinks.map(({ id, title, url }) => (
          <Link href={url} key={id} className={styles.link}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
