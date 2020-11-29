import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import ErrorNotice from '../misc/ErrorNotice';
import SuccessNotice from '../misc/SuccessNotice';

export default function Consultar() {

    const { register, handleSubmit, reset} = useForm();

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const onSubmit = async (data) => {
        try {
            let res = await Axios.post(
                'http://localhost:8080/crearLibro',
                data
            );
            if(res.data.estado === 'OK'){  
                setError(undefined);
                setSuccess(res.data.mensaje);
                reset();             
            }else{
                setSuccess(undefined);
                setError('No fue posible crear el libro');
            }
        } catch (err) {
            console.log(err.response.data);
            setSuccess(undefined);
            setError(err.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            {error && (
                <ErrorNotice message={error} clearNotice={() => setError(undefined)} />
            )}
            {success && (
                <SuccessNotice message={success} clearNotice={() => setSuccess(undefined)} />
            )}
            <div className='forms'>
                <label className='title'>Agregar</label>
                <span>ISBN</span>
                <input ref={register} name={'isbn'} type='text' placeholder='Ingresar ISBN' required={true}/>
                <span>Nombre del libro</span>
                <input ref={register} name={'nombreLibro'} type='text' placeholder='Ingresar nombre del libro' required={true}/>
                <button>Aceptar</button>
            </div>            
        </form>
    )
}
