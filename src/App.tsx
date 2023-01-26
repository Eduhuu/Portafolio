import { Container } from "@mui/material";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/footer";

// HACER QUE FUNCIONE EL CHILDREN Y EL ..PROPS
/* import MainContainer from './components/layout/MainContainer'; */

function App() {
  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
