import React, {useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarUsuarios = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({

        nombres: '',
        apellidos: '',
        tipo_documento: '',
        numero_documento: '',
        correo_personal: '',
        numero_celular: ''
    });

    useEffect(() => {

        const cargarUsuario = async () => {

            try {

        const res = await axios.get(`http://localhost:3001/api/usuarios/${id}`);
        setUsuario(res.data);
            } catch (error) {

                console.error('Error al obtener el usuario:', error);
            }
        };

        cargarUsuario()
    }, [id]);

    const handleChange = (e) => {

        setUsuario({...usuario, [e.target.name]: e.target.value});
    };

    const handlesSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/api/usuarios/${id}`, usuario);
            navigate('/usuarios');
        } catch (error) {
            console.error('Error al guardar cambios: ', error);
        }
    };

    return (

        <div className="ContenedorP">
            <div className="Usuario-titulo">Editar Usuarios</div>

            <div className="Contenedor-Formulario">
                <form onSubmit={handlesSubmit}>
                    <div className="Fila">
                        <div className="col-md-6 mb-2">
                            <input type="text" name="nombres" placeholder="Ingrese sus nombres" className="form-control" value={usuario.nombres} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" name="apellidos" placeholder="Ingrese sus apellidos" className="form-control" value={usuario.apellidos} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" name="tipo_documento" placeholder="Ingrese su tipo de documento" className="form-control" value={usuario.tipo_documento} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" name="numero_documento" placeholder="Ingrese su numero de documento" maxLength={10} minLength={10} className="form-control" value={usuario.numero_documento} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="email" name="correo_personal" placeholder="Ingrese su correo electrónico" className="form-control" value={usuario.correo_personal} onChange={handleChange} required/>
                        </div>
                        <div className="col-md-6 mb-2">
                            <input type="text" name="numero_celular" placeholder="Ingrese su numero telefonico" maxLength={10} minLength={10} className="form-control" value={usuario.numero_celular} onChange={handleChange} required/>
                        </div>

                        <div className="Botones-acciones">
                            <button type="submit" className="btn btn-succeess m-2">Guardar</button>
                            <button type="button" className="btn btn-secondary m-2" onClick={() => navigate('/usuarios')}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ActualizarUsuarios;