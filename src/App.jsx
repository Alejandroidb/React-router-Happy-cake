import Navigation from "./components/Navigation";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
