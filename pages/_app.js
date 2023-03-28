import "@/styles/globals.css";

//import de Bootstrap de node modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import du composant Container
import Container from "@/components/Container/Container";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
