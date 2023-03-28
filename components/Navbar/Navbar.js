import React from "react";
import Link from "next/link";

//import du style pour la navbar
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a>Accueil</a>
      </Link>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href="/liste">
        <a>Liste</a>
      </Link>
    </nav>
  );
}
