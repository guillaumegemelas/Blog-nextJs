// import React from "react";
// import styles from "@/styles/Home.module.css";
// import { v4 as uuidv4 } from "uuid";
// import { useRouter } from "next/router";

export default function articles(props) {
  // console.log(props);

  //   const router = useRouter();

  return (
    <div className="container">
      <div className="card-deck">
        <h5 className="card-title">{props.articleEnCours.name}</h5>
        <p>username: {props.articleEnCours.username} </p>
        <div className="card-deck">
          <p>Username: {props.articleEnCours.username} </p>
          <p>Email: {props.articleEnCours.email} </p>
          <p>Site web: {props.articleEnCours.website} </p>
          <p>Téléphone: {props.articleEnCours.phone} </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.articles;
  //   slug renvoie bien le nom du user sur lequel on a cliqué
  // console.log(slug, "log de slug **********************");

  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  //data renvoie bien les noms des users
  // console.log(data, "log de data staticprops------------------------");

  const articleEnCours = data.find((item) => item.name === slug);

  return {
    props: {
      articleEnCours,
    },
  };
}

//chemin dynamique donc utilisation de getStaticPaths

export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  //data renvoie bien les noms des users
  //   console.log(data, "log de data------------------------");

  const paths = data.map((item) => ({
    params: { articles: item.name },
  }));

  //   params renvoie bien un tableau d'objets avec articles: nom du user
  // console.log(paths, "log de paths+++++++++++++++++++++");

  return {
    paths,
    fallback: false,
  };
}
