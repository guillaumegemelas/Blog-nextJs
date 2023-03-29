import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function liste(props) {
  console.log(props);
  return (
    <div className="container">
      <h1 className={styles.titre}>La liste des utilisateurs</h1>
      <div className="card-deck">
        {props.data.map((item) => (
          <div key={uuidv4()}>
            <h5 className="cart-title">{item.name}</h5>
            <Link
              className="card-link"
              legacyBehavior
              //il va falloir mettre un lien dynamique
              href={`/articles/${item.name}`}
            >
              <a>Contacter</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  //on obtient un tableau d'objets de longueur 100:
  //ensuite faire des cartes avec bootstrap
  //si ca ne fonctionne pas faire avec css classique
  //et mapper

  return { props: { data } };
}
