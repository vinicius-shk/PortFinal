import { useEffect } from "react";
import WebFont from "webfontloader";
import NavBar from "./components/header";
import Main from "./routes";
import GlobalStyle from "./styles/globalStyles";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cormorant Garamond', 'Chilanka']
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Main />
    </>
  );
}

export default App;
