import "@/styles/globals.css";
import { useEffect } from "react";

//import de Bootstrap de node modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import du composant Container
import Container from "@/components/Container/Container";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
