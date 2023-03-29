import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function blog(props) {
  console.log(props);
  return (
    <div className="container">
      <h1 className={styles.titre}>Bienvenue sur le Blog.</h1>
      <p className={styles.soustitre}>Voici les articles</p>

      <div className="card-deck" style={{ width: 500 }}>
        {props.data.map((item) => (
          <div key={uuidv4()} className="card">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle">{item.body}</h6>
            <Link
              className="card-link"
              legacyBehavior
              //il va falloir mettre un lien dynamique
              href={`/posts/${item.title}`}
            >
              <a>Lire cet article</a>
            </Link>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  //on obtient un tableau d'objets de longueur 100:

  //ensuite faire des cartes avec bootstrap
  //si ca ne fonctionne pas faire avec css classique
  //et mapper

  return { props: { data } };
}
