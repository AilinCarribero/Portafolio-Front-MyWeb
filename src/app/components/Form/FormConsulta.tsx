'use client'

import React, { useState } from 'react'
import { Consulta } from './models'
import { postApiConsulta } from '@/app/services/consulta.service'
import { validacionRespuesta } from '@/ultis/response'
import { Toast } from '@/components'

interface FormState {
    inputValue: Consulta
}

function FormConsulta() {
    const [consulta, setConsulta] = useState<FormState['inputValue']>({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })

    const [validacion, setValidacion] = useState({
        nombre: true,
        email: true,
        telefono: true,
        mensaje: true
    })

    const [showToast, setShowToast] = useState(false);
    const [mensajeToast, setMensajeToast] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;

        setConsulta(prevConsulta => ({
            ...prevConsulta,
            [targetName]: targetValue
        }))

        handleValidacion(targetName, targetValue)
    }

    const handleValidacion = (name?: string, value?: string) => {
        if (!consulta.nombre) {
            if (name == 'nombre' && value) {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    nombre: true
                }))
            } else {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    nombre: false
                }))
            }
        } else if (!validacion.nombre) {
            setValidacion(prevValidacion => ({
                ...prevValidacion,
                nombre: true
            }))
        }

        if (!consulta.email || !consulta.email.includes('@')) {
            if (name == 'email' && value && value.includes('@')) {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    email: true
                }))
            } else {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    email: false
                }))
            }
        } else if (!validacion.email) {
            setValidacion(prevValidacion => ({
                ...prevValidacion,
                email: true
            }))
        }

        if (!consulta.mensaje) {
            if (name == 'mensaje' && value) {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    mensaje: true
                }))
            } else {
                setValidacion(prevValidacion => ({
                    ...prevValidacion,
                    mensaje: false
                }))
            }
        } else if (!validacion.mensaje) {
            setValidacion(prevValidacion => ({
                ...prevValidacion,
                mensaje: true
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!consulta.nombre || !consulta.email || !consulta.email.includes('@') || !consulta.mensaje) {
            handleValidacion()
        } else if (validacion.mensaje && validacion.email && validacion.nombre && validacion.telefono) {
            try {
                const respuestaApi = await postApiConsulta(consulta);

                const validacion = validacionRespuesta(respuestaApi);

                if (validacion) {
                    setMensajeToast(respuestaApi.message);
                    setShowToast(true);

                    setConsulta({
                        nombre: '',
                        email: '',
                        telefono: '',
                        mensaje: ''
                    })
                } else {
                    setMensajeToast(respuestaApi.message);
                    setShowToast(true);
                }
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (<>
        {showToast && <Toast show={showToast} mensaje={mensajeToast} setShow={setShowToast} setMensaje={setMensajeToast} />}
        <form onSubmit={handleSubmit} autoComplete='off' noValidate>
            <div>
                <label>Nombre*</label>
                <input className={validacion.nombre ? ' ' : 'form-campo-invalid'} name='nombre' value={consulta.nombre} onChange={handleChange} type="text" placeholder="Nombre" />
                {!validacion.nombre && <p className='form-mensaje-error'>Complete el campo</p>}
            </div>
            <div>
                <label>E-mail*</label>
                <input className={validacion.email ? ' ' : 'form-campo-invalid'} name='email' value={consulta.email} onChange={handleChange} type="email" placeholder="ejemplo@gmail.com" />
                {!validacion.email && <p className='form-mensaje-error'>{consulta.email && !consulta.email.includes('@') ? 'Coloque un E-mail valido' : 'Complete el campo'}</p>}
            </div>
            <div>
                <label>Teléfono</label>
                <input className={validacion.telefono ? ' ' : 'form-campo-invalid'} name='telefono' value={consulta.telefono} onChange={handleChange} type="numero" placeholder="54 222 2222 222" />
            </div>
            <div>
                <label>Mensaje*</label>
                <textarea className={validacion.mensaje ? ' ' : 'form-campo-invalid'} name='mensaje' value={consulta.mensaje} onChange={handleChange} placeholder="Mensaje" />
                {!validacion.mensaje && <p className='form-mensaje-error'>Complete el campo</p>}
            </div>
            <div>
                <button> Enviar </button>
            </div>
        </form>
    </>)
}

export default FormConsulta