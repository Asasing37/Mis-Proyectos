import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Usuarios from "./components/pages/Usuarios";
import CrearUsuarios from "./components/Usuarios/crearUsuarios";

function Home() {
  return (
    <div>
      <h2>Bienvenido a la Aerolínea</h2>
      <Link to="/usuarios">Ver Usuarios</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
  <Route path="/crearUsuarios" element={<CrearUsuarios />} />
      </Routes>
    </Router>
  );
}
