import { Container, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContainer from "./components/layout/MainContainer";
import { useAppDispatch, useAppSelector } from "./store/AppStoreHooks";

// HACER QUE FUNCIONE EL CHILDREN Y EL ..PROPS
/* import MainContainer from './components/layout/MainContainer'; */

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="h-full">
        <Header />
        <MainContainer>
          <h1 className="text-3xl font-bold underline">TEMA: </h1>
        </MainContainer>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
