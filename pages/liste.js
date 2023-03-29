import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function liste(props) {
  // console.log(props);
  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center">La liste des utilisateurs</h1>
      <div className="row justify-content-center mt-5">
        {props.data.map((item) => (
          <div className="col-12 col-lg-6 m-3" key={uuidv4()}>
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                {/* d-flex pour flexbox */}
                <h5 className="cart-title">{item.name}</h5>
                <Link
                  className="ml-auto card-link"
                  legacyBehavior
                  //il va falloir mettre un lien dynamique
                  href={`/articles/${item.name}`}
                  // on pourrait comme blog utiliser l'id avec data.id
                >
                  <a>Contacter</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  // il faut transformer le json en données utilisables par JavaScript
  const data = await result.json();

  //on obtient un tableau d'objets de longueur 100:
  //ensuite faire des cartes avec bootstrap

  return { props: { data } };
}
