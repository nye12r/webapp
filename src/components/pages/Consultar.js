import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Consultar() {
    const { register, handleSubmit, reset } = useForm();

    const [libros, setLibros] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onSubmit = async (data) => { 
        try{       
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
            setError(undefined);
            setSuccess('El libro se ha almacenado correctamente');
            reset();
        } catch (err) {
            console.log(err);
            setSuccess(undefined);
            setError('No se encontraron libros');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <ErrorNotice message={error} clearNotice={() => setError(undefined)} />
            )}
            {success && (
                <SuccessNotice message={success} clearNotice={() => setSuccess(undefined)} />
            )}
            <div className='forms'>                
                <label className='title'>Consultar</label>
                <span>ISBN</span>
                <input ref={register} name={'ISBN'} type='text' placeholder='Ingresae ISBN' required={true}/>
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
