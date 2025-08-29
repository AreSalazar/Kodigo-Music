import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px"}}>
        {/*Agregando color de letra a los links*/}
        <Link to="/" style={{ color: "white"}}>Inicio</Link>
        <Link to="/form" style={{ color: "white"}}>Formulario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
