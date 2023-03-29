import React from "react";
import styles from "@/styles/Home.module.css";

export default function posts(props) {
  console.log(props, "log de props===============");
  return (
    <div className="container">
      <h1 className={styles.titre}>{props.postEnCours.title}</h1>
      <p>{props.postEnCours.body}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.posts;
  console.log(slug, "log de slug blog**********************");

  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  console.log(data, "log de data staticprops- blog-----------------------");

  const postEnCours = data.find((item) => item.title === slug);

  return {
    props: {
      postEnCours,
    },
  };
}

export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  console.log(data, "log de data blog------------------------");

  const paths = data.map((item) => ({
    params: { posts: item.title },
  }));

  console.log(paths, "log de paths blog+++++++++++++++++++++");

  return {
    paths,
    fallback: false,
  };
}
