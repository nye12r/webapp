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
            console.log(data);  
                  
            // const res = await Axios.post(
            //      'http://localhost:8080/crear',
            //      data 
            // );
            // console.log(res);            
            setError(undefined);
            setSuccess('El libro se ha almacenado correctamente');
            reset();
        } catch (err) {
            console.log(err);
            setSuccess(undefined);
            setError('No fue posible crear el libro');
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
                <label className='title'>Prestar</label>
                <span>ISBN</span>
                <input ref={register} name={'ISBN'} type='text' placeholder='Ingresar ISBN' required={true}/>
                <span>Nombre del cliente</span>
                <input ref={register} name={'nomCliente'} type='text' placeholder='Ingresar nombre del cliente'/>
                <button>Aceptar</button>
            </div>            
        </form>
    )
}
