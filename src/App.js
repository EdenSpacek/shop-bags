import { Button, Container, ThemeProvider } from "@mui/material";
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar/>
        <Banner/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
