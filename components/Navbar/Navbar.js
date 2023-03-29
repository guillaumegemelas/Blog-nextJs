import React from "react";
import Link from "next/link";

//import du style pour la navbar
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      {/* navbar-dark permet d'avoir le texte en blanc(-light pour l'inverse) */}
      <div className="container-fluid justify-content-center">
        <Link legacyBehavior href="/">
          <a className="navbar-brand mx-4">Accueil</a>
        </Link>
        <Link legacyBehavior href="/blog">
          <a className="navbar-brand mx-4">Blog</a>
        </Link>
        <Link legacyBehavior href="/liste">
          <a className="navbar-brand mx-4">Liste</a>
        </Link>
      </div>
    </nav>
  );
}
