import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Consultar() {
    const [libros, setLibros] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    useEffect(() => {
        consultarLibros();
    }, [libros, setLibros])

    const consultarLibros = async () => { 
        try{       
            let res = await Axios.get(
                'http://localhost:8080/consultarLibros'
            );
            if(res.data.length > 0){
                setLibros(res.data);
            }else{
                setLibros([]);
                setSuccess(undefined);
                setError(undefined);
            }         
        } catch (err) {
            console.log(err);
            setSuccess(undefined);
            setError('No se encontraron libros');
        }
    };

    return (
        <form autocomplete='off'>
            {error && (
                <ErrorNotice message={error} clearNotice={() => setError(undefined)} />
            )}
            {success && (
                <SuccessNotice message={success} clearNotice={() => setSuccess(undefined)} />
            )}
            <div className='forms forms-books'>                
                <label className='title'>Consultar</label>
                <div className='content-books'>
                    { libros && libros.length > 0 ?(
                        libros.map((elem, idx) => {
                            return <div className='book' key={idx}>
                                <h2 className='tituloLibro'>{elem.isbn}</h2>
                                <h4>{elem.nombreLibro}</h4>   
                                <h6>Cliente: {elem.nombrePersona}</h6>                         
                                <h6>Dev: {elem.fechaLimite}</h6>
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
