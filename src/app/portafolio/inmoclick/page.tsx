import Image from 'next/image'
import React from 'react'
import { inmoclick } from './models'
import { Carrousel } from '@/components'

function Inmoclick() {
  return (
    <>
      <h1>Inmoclick - Portal Inmobiliario - FrontEnd</h1>
      <div>
        <div className='content-carrousel'>
          <Carrousel images={inmoclick.images} showButtons={true} autoPlay={true} delayAutoPlay={10000} />
        </div>
      </div>
      <div className='content-descripcion'>
        <h2>Descripción</h2>
        <p>
          En este caso tenemos el rework del frontend de la página web del portal inmobiliario Inmoclick.
          <br /><br />
          Se cuenta con una versión mobile y una desktop con componentes reutilizables para ambas partes.
          <br /><br />
          Actualmente se han desarrollado 5 vistas: home, búsqueda normal, búsqueda por mapa, ficha del inmueble, y registro.
          <br /><br />
          En la vista de desktop de la búsqueda hay dos formas de visualizar los inmuebles, una en forma de lista de inmuebles y otra en formato de tarjetas de inmuebles.
          <br /><br />
          <b>Está web aún se encuentra en desarrollo y no ha salido a producción.</b>
        </p>
      </div>
      <div className='content-tecnologias'>
        <h2>Tecnologías Utilizadas</h2>
        <div className='content-img-teconologias'>
          <Image className='icon' height="50" width={50} src={`/img/icons-skills/react.svg`} alt='react' />
          <Image className='icon' height="50" width={50} src={`/img/icons-skills/redux.svg`} alt='redux' />
          <Image className='icon' height="50" width={50} src={`/img/icons-skills/bootstrap.svg`} alt='bootstrap' />
          <Image className='icon' height="50" width={50} src={`/img/icons-skills/sass.svg`} alt='sass' />
          <Image className='icon' height="50" width={50} src={`/img/icons-skills/framer-motion-white.svg`} alt='framer motion' />
        </div>
      </div>
      <div className='content-video'>
        <video controls src={`${inmoclick.videos.url}`} />
      </div>
    </>
  )
}

export default Inmoclick