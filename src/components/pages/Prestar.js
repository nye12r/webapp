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
                  
            let res = await Axios.post(
                'http://localhost:8080/prestar',
                data
            );
            if(res.data.estado === 'OK'){  
                setError(undefined);
                setSuccess(res.data.mensaje);
                reset();             
            }else{
                setSuccess(undefined);
                setError('No fue posible prestar el libro');
            }
        } catch (err) {
            console.log(err);
            setSuccess(undefined);
            setError('No fue posible realizar el prestamo');
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
                <input ref={register} name={'isbn'} type='text' placeholder='Ingresar ISBN' required={true}/>
                <span>Nombre del cliente</span>
                <input ref={register} name={'persona'} type='text' placeholder='Ingresar nombre del cliente'/>
                <button>Aceptar</button>
            </div>            
        </form>
    )
}
