import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Consultar() {
    const { register, handleSubmit, reset } = useForm();

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onSubmit = async (data) => {
        try {
            let res = await Axios.post(
                'http://localhost:8080/eliminarLibro',
                data
            );
            if(res.data.estado === 'OK'){  
                setError(undefined);
                setSuccess(res.data.mensaje);
                reset();             
            } else if(res.data.estado === 'MAL'){
                setSuccess(undefined);
                setError(res.data.mensaje);
                reset();
            } else {
                setSuccess(undefined);
                setError('No fue posible eliminar el libro');
            }
        } catch (err) {
            console.log(err);
            setSuccess(undefined);
            setError('No fue posible eliminar el libro');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autocomplete='off'>
            {error && (
                <ErrorNotice message={error} clearNotice={() => setError(undefined)} />
            )}
            {success && (
                <SuccessNotice message={success} clearNotice={() => setSuccess(undefined)} />
            )}
            <div className='forms'>
                <label className='title'>Eliminar</label>
                <span>ISBN</span>
                <input ref={register} name={'isbn'} type='text' placeholder='Ingresar ISBN' required={true}/>
                <button>Aceptar</button>
            </div>            
        </form>
    )
}
