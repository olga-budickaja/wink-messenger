import './App.scss';
import AppRouter from "./components/AppRouter";
import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (

      <>
          <Navbar/>
          <Container maxWidth="xl" sx={{ minHeight: 'calc(100vh - 65px)' }}>
              <AppRouter/>
          </Container>
      </>
  );
}

export default App;
