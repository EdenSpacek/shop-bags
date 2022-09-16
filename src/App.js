import { Button, Container, ThemeProvider } from "@mui/material";
import Appbar from "./components/Appbar";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar/>
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
