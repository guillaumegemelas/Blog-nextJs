import React from "react";
import styles from "@/styles/Home.module.css";

export default function posts(props) {
  console.log(props, "log de props===============");
  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center mb-4">{props.data.title}</h1>
      <p className="text-center mb-4">{props.data.body}</p>
    </div>
  );
}

// 2. puis on continue avec getStaticProps

export async function getStaticProps(context) {
  // on pourrait utiliser slug
  //   const slug = context.params.posts;
  //   console.log(slug, "log de slug blog**********************");

  //mais on va faire pour cet exemple avec l'id
  const id = context.params.posts;

  //   si on utilise slug, l'url est "/posts"
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await result.json();
  console.log(data, "log de data staticprops- blog-----------------------");

  //   si on utilise id pas besoin de cette étape de slug et postEnCours
  //   const postEnCours = data.find((item) => item.title === slug);

  return {
    props: {
      //   postEnCours,
      data,
    },
  };
}

// 1. on commence avec getStaticpaths

export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  //   console.log(data, "log de data blog------------------------");

  const paths = data.map((item) => ({
    // params: { posts: item.title },
    params: { posts: item.id.toString() },
  }));

  //   console.log(paths, "log de paths blog+++++++++++++++++++++");

  return {
    paths,
    fallback: false,
  };
}
