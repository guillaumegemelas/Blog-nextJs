import React from "react";
import styles from "@/styles/Home.module.css";

//import pour key unique
import { v4 as uuidv4 } from "uuid";

export default function liste(props) {
  console.log(props);
  return (
    <div>
      <p>vous etes sur la page liste</p>
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
