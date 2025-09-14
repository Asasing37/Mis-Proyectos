
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Usuarios.css';

const Usuarios = () => {
    
    const [usuarios, setUsuarios] = useState([]);

    const cargarUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/usuarios');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al cargar los usuarios', error);
        }
    };

    useEffect(() => {
        cargarUsuarios();
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="usuarios-titulo">Lista de Usuarios</h2>
                <Link to="/crearUsuarios">
                    <button className="btn btn-success usuarios-boton-nuevo">Usuario Nuevo</button>
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered align-middle usuarios-tabla">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Tipo de documento</th>
                            <th>Numero de documento</th>
                            <th>Correo personal</th>
                            <th>Numero de celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((u) => (
                            <tr key={u.id}>
                                <td>{u.nombres}</td>
                                <td>{u.apellidos}</td>
                                <td>{u.tipo_documento || '-'}</td>
                                <td>{u.numero_documento || '-'}</td>
                                <td>{u.correo_personal || '-'}</td>
                                <td>{u.numero_celular || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;