import { Box, Button, Container, ThemeProvider, Typography } from "@mui/material";
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import Products from "./components/Products/Products";
import Promotion from "./components/promotions/Promotion";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar/>
        <Banner/>
        <Promotion/>
        <Box display={"flex"} justifyContent={"center"} sx={{p: 4}}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
