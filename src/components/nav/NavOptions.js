import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

export default function AuthOptions() {

    const history = useHistory();

    const consultarLibro = () => {
        history.push('/');
    }

    const prestarLibro = () => {
        history.push('/prestar');
    }

    const agregarLibro = () => {
        history.push('/agregar');
    }

    const eliminarLibro = () => {
        history.push('/eliminar');
    }

    return <nav className='navoptions'>
        <button onClick={consultarLibro}>Consultar</button>
        <button onClick={prestarLibro}>Prestar</button>
        <button onClick={agregarLibro}>Agregar</button>      
        <button onClick={eliminarLibro}>Eliminar</button>
    </nav>
}
