
import React from 'react'
import Image from 'next/image'
import { Carrousel } from '@/components'
import { gdc } from './models'
import Link from 'next/link'

function GDosConstrucciones() {
    return (
        <>
            <h1>GDosConstrucciones - Gestor de alquileres y módulos</h1>
            <div>
                <div className='content-carrousel'>
                    <Carrousel images={gdc.images} showButtons={true} autoPlay={true} delayAutoPlay={10000} />
                </div>
                <div className='content-repo'>
                    <Link href='https://github.com/AilinCarribero/Portafolio-GDosConstrucciones' target="_blank">
                        <Image width={50} height={50} src={'/img/icon-redes-sociales/github-white.svg'} alt='git GDosConstrucciones' />
                    </Link>
                </div>
            </div>
            <div className='content-descripcion'>
                <h2>Descripción</h2>
                <p>
                    Tenemos una página web dedicada a la administración de módulos fabricados por la empresa GDosConstrucciones y la gestión de alquileres de los mismos.
                    <br /><br />
                    Cuenta con 4 niveles de usuarios. Usuarios administradores, moderadores, talleres y usuarios normales.
                    Cada usuario tiene diferentes restricciones acorde a las tareas que puede realizar en la aplicación, a excepción del usuario administrador que tiene acceso a todo.
                    <br /><br />
                    Los módulos presentan una trazabilidad que muestra por cuales clientes ha sido alquilado. También tiene la posibilidad de marcar dichos módulos cómo vendidos.
                    <br /><br />
                    También cuenta con un gestor de registro de pagos de los alquileres donde se puede visualizar a simple vista que meses
                    se han pagado y cuáles se deben. A su vez, en la sección de los contratos de un alquiler, se puede visualizar si dicho contrato ya fue cancelado o se adeuda.
                    <br /><br /> <b>Está web aún se encuentra en desarrollo aunque esta siendo utilizada.</b>
                </p>
            </div>
            <div className='content-tecnologias'>
                <h2>Tecnologías Utilizadas</h2>
                <div className='content-img-teconologias'>
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/react.svg`} alt='react' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/redux.svg`} alt='redux' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/bootstrap.svg`} alt='bootstrap' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/sass.svg`} alt='sass' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/node.svg`} alt='node' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/mysql.svg`} alt='mysql' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/nginx.svg`} alt='nginx' />
                    <Image className='icon' height="50" width={50} src={`/img/icons-skills/docker.svg`} alt='docker' />
                </div>
            </div>
            <div className='content-video'>
                <video controls src={`${gdc.videos.url}`} />
            </div>
        </>
    )
}

export default GDosConstrucciones