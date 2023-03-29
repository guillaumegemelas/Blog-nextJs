export default function articles(props) {
  // console.log(props);

  //   const router = useRouter();

  return (
    <div className="container px-4 pt-3">
      <h2 className="text-center mb-4 mt-5">{props.articleEnCours.name}</h2>

      <div className="row justrify-content-center">
        <div className="col-12 col-lg8-col-xl-6">
          <div className="card p-2">
            <div className="card-body">
              <div className="card-title">
                <h4> {props.articleEnCours.name}</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                  Username: {props.articleEnCours.username}
                </h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    Email: {props.articleEnCours.email}
                  </li>
                  <li className="list-group-item">
                    Site web: {props.articleEnCours.website}
                  </li>
                  <li className="list-group-item">
                    Téléphone: {props.articleEnCours.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
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

  // si on veut voir l'exemple avec l'Id, voir page [posts]
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
    // on pourrait utiliser l'id (Cf. posts)
    params: { articles: item.name },
  }));

  //   params renvoie bien un tableau d'objets avec articles: nom du user
  // console.log(paths, "log de paths+++++++++++++++++++++");

  return {
    paths,
    fallback: false,
  };
}
