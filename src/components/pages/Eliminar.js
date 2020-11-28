import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import ErrorNotice from '../misc/ErrorNotice';

export default function Consultar() {
    const { register, handleSubmit, errors, reset } = useForm();

    const [error, setError] = useState();

    const onSubmit = async (data) => {
        console.log(data);        
        // const res = await Axios.post(
        //     'http://localhost:5000/',
        //     data 
        // );
        setError('Fallo');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <div className='forms'>
                <label className='title'>Eliminar</label>
                <span>ISBN</span>
                <input ref={register} name={'ISBN'} type='text' placeholder='Ingresar ISBN' required='true'/>
                <button>Aceptar</button>
            </div>            
        </form>
    )
}
