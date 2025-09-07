import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CrearUsuarios() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    nombres: "",
    apellidos: "",
    tipo_documento: "",
    numero_documento: "",
    correo_personal: "",
    numero_celular: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/api/usuarios", formData);
  navigate("/usuarios");
    } catch (error) {
      console.error("Error al crear usuario", error);
    }
  };

  return (
    <div className="contenedorP">
      <h2>Crear Usuario</h2>
      <input type="text" name="nombres" placeholder="Nombres" className="form-control" onChange={handleChange} />
      <input type="text" name="apellidos" placeholder="Apellidos" className="form-control" onChange={handleChange} />
      <input type="text" name="tipo_documento" placeholder="Tipo de documento" className="form-control" onChange={handleChange} />
      <input type="text" name="numero_documento" placeholder="Numero de documento" className="form-control" onChange={handleChange} />
      <input type="email" name="correo_personal" placeholder="Correo personal" className="form-control" onChange={handleChange} />
      <input type="text" name="numero_celular" placeholder="Numero de celular" className="form-control" onChange={handleChange} />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Crear Usuario
      </button>
    </div>
  );
}

export default CrearUsuarios;
