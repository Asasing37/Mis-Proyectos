import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    } catch (error) {
      console.error("Error al crear usuario", error);
    } finally {
      navigate("/usuarios");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Crear Usuario</h2>
              <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <div className="mb-3">
                  <input type="text" name="nombres" placeholder="Nombres" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" name="apellidos" placeholder="Apellidos" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" name="tipo_documento" placeholder="Tipo de documento" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" name="numero_documento" placeholder="Numero de documento" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="email" name="correo_personal" placeholder="Correo personal" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="text" name="numero_celular" placeholder="Numero de celular" className="form-control" onChange={handleChange} required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Crear Usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearUsuarios;
