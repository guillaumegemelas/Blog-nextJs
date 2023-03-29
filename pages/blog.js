import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function blog(props) {
  console.log(props);
  return (
    <div className="container px-4 py-5">
      {/* px pour droite et gauche et py pour haut et bas */}
      <h1 className="text-center">Bienvenue sur le Blog.</h1>
      <p className="text-center">Voici les articles</p>

      <div className="row g-3 mt-4">
        {/* mt-4 = margin-top=4 */}

        {props.data.map((item) => (
          <div key={uuidv4()} className="col-12 col-md-6 col-xl-4">
            {/* petit ecran 12 colonnes, moyen 6 et grand 4 colonnes */}
            <div className="card h-100 shadow-sm">
              {/* puis on fait notre div card avec du box shadow... */}
              <div className="card-body">
                {/* cette div permet d'avoir des écarts haut bas droite et gauche */}
                <h5 className="card-title">{item.title}</h5>
                <p className="card-subtitle">
                  {item.body.slice(0, 20) + "..."}
                  {/* pour ne faire apparaitre que les 20 premiers caractères et ajouter ... à la fin */}
                </p>
                <Link
                  className="card-link"
                  legacyBehavior
                  //il va falloir mettre un lien dynamique
                  //   soit avec slug
                  //   href={`/posts/${item.title}`}
                  //   soit avec l'id....
                  href={`/posts/${item.id.toString()}`}
                >
                  <a>Lire cet article</a>
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
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  //on obtient un tableau d'objets de longueur 100:

  //ensuite faire des cartes avec bootstrap
  //si ca ne fonctionne pas faire avec css classique
  //et mapper

  return { props: { data } };
}
