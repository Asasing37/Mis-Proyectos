import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className='contenedorP'>
            <table>
                <thead>
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
    );
};

export default Usuarios;