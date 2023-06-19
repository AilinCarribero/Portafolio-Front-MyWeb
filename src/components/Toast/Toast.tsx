'use client'

import React, { useEffect } from 'react'
import './toast.scss'
import '../../styles/animates/swing.scss'

interface Props {
    mensaje: string,
    type?: string,
    show: boolean,
    setShow(state: boolean): void
    setMensaje(mensaje: string): void
}

function Toast({ mensaje, type, show, setShow, setMensaje }: Props) {
    console.log(mensaje, show)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
            setMensaje('')
        }, 5000)

        return () => { }
    }, [])


    return (
        show &&
        <div className='content-toast slide-left'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Toast