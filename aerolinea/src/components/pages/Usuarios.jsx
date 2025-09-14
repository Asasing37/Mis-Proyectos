import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Usuarios.css";

const  Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // indicador de carga
  const [error, setError] = useState(null); // para mostrar errores
  const navigate = useNavigate();

  // Función para cargar usuarios desde la API
  const cargarUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/usuarios");
      // Si la API devuelve un solo objeto en vez de array, lo adaptamos
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setUsuarios(data);
    } catch (err) {
      console.error("Error al cargar los usuarios:", err);
      setError("No se pudieron cargar los usuarios.");
      setUsuarios([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const handleEditar = (usuarioId) => {
    navigate(`/usuarios/editar/${usuarioId}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="usuarios-titulo">Lista de Usuarios</h2>
        <Link to="/usuarios/crear">
          <button className="btn btn-success usuarios-boton-nuevo">
            Usuario Nuevo
          </button>
        </Link>
      </div>

      {/* Indicador de carga */}
      {loading && <p className="text-center">Cargando usuarios...</p>}

      {/* Mensaje de error */}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle usuarios-tabla">
            <thead className="table-dark">
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de documento</th>
                <th>Número de documento</th>
                <th>Correo personal</th>
                <th>Número de celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length > 0 ? (
                usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.nombres}</td>
                    <td>{u.apellidos}</td>
                    <td>{u.tipo_documento || "-"}</td>
                    <td>{u.numero_documento || "-"}</td>
                    <td>{u.correo_personal || "-"}</td>
                    <td>{u.numero_celular || "-"}</td>
                    <td>
                      <div className="usuarios-acciones d-flex flex-wrap justify-content-center gap-1">
                        <button
                          className="btn btn-warning btn-sm p-2"
                          onClick={() => handleEditar(u.id)}
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No hay usuarios registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
