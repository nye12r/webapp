import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import ErrorNotice from '../misc/ErrorNotice';

export default function Consultar() {
    const { register, handleSubmit, errors, reset } = useForm();

    const [libros, setLibros] = useState();
    const [cmpLibros, setCmpLibros] = useState();
    const [error, setError] = useState();

    const onSubmit = async (data) => {        
        let res = [
            {
                nomLibro: 'Hola',
                isbn: 'AAAD3332',
                cliente:'Carlos',
                fechaDevolucion:'2020-01-01'
            },
            {
                nomLibro: 'Hola',
                isbn: 'AAAD3332',
                cliente:'Carlos',
                fechaDevolucion:'2020-01-01'
            }
        ];
        setLibros(res);
        /* await Axios.post(
            'http://localhost:5000/',
            data 
        );*/
        setError('Fallo');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <div className='forms'>                
                <label className='title'>Consultar</label>
                <span>ISBN</span>
                <input ref={register} name={'ISBN'} type='text' placeholder='Ingresae ISBN' required='true'/>
                <button>Aceptar</button>
                <div className='content-books'>
                    { libros && libros.length > 0 ?(
                        libros.map((elem, idx) => {
                            return <div className='book' key={idx}>
                                <h2 className='tituloLibro'>LIBRO</h2>
                                <h5>{elem.isbn}</h5>
                                <h4>{elem.nomLibro}</h4>   
                                <h6>Cliente: {elem.cliente}</h6>                         
                                <h6>Dev: {elem.fechaDevolucion}</h6>
                            </div>
                        })
                    ):(
                        <div>
                            
                        </div>
                    )}
                </div>                
            </div>            
        </form>
    )
}
