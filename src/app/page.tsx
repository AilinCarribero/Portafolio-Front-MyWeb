import Image from 'next/image'
import './styles/home.scss'
import { Card, Carrousel } from '@/components'
import { fontCoe } from './models'
import { gdc } from './portafolio/gdosconstrucciones/models'
import { inmoclick } from './portafolio/inmoclick/models'
import { FormConsulta } from './components'
import Link from 'next/link'

import docker from '../../public/img/icons-skills/docker.svg'
import git from '../../public/img/icons-skills/git.svg'
import mongo from '../../public/img/icons-skills/mongo.svg'
import mysql from '../../public/img/icons-skills/mysql.svg'
import react from '../../public/img/icons-skills/react.svg'
import node from '../../public/img/icons-skills/node.svg'
import symfony from '../../public/img/icons-skills/symfony-white.svg'
import logoCoinin from '../../public/img/logo-v1.svg'
import sass from '../../public/img/icons-skills/sass.svg'
import html from '../../public/img/icons-skills/html.svg'
import css from '../../public/img/icons-skills/css.svg'
import js from '../../public/img/icons-skills/js.svg'
import nginx from '../../public/img/icons-skills/nginx.svg'
import bootstrap from '../../public/img/icons-skills/bootstrap.svg'
import framerMotion from '../../public/img/icons-skills/framer-motion-white.svg'
import redux from '../../public/img/icons-skills/redux.svg'
import next from '../../public/img/icons-skills/nextjs-white.svg'


export default function Home() {

  const servicios = [
    {
      titulo: 'Desarrollo Web',
      descripcion: 'Desarrollo webs desde cero en base a sus necesidades.',
      items: [
        'Configuración y recomendación de servicio de servidor acorde a su necesidad.',
        'Desarrollo de base de datos, backend y frontend.',
        'Entrega de la pagina web en cualquier momento con su documentación correspondiente. Nunca estara atado a nuestro servicio, la web es suya, no nuestra.'
      ]
    },
    {
      titulo: 'Desarrollo FrontEnd - UX/UI',
      descripcion: 'Desarrollo de interfaces amigables con los usuarios para su web.',
      items: [
        '¿Tiene una API pero no una interfaz? Podemos diseñar juntos la inferfaz o puede traer una ya lista para programarla y le damos vida a su web.'
      ]
    },
    {
      titulo: 'Mantenimiento Web',
      descripcion: 'Mantenemos actualizada su web y le agregamos contenido que se ajuste a sus necesidades.',
      items: [
        'Actualizamos su web a las últimas verciones de su tecnologia útilizada.',
        'Renovamos el diseño de su web con la última tecnologia en el mercado acorde a sus necesidades y capacidades.',
        'Mantenemos sus servidores actualizados al día y funcionando acorde a sus necesidades.'
      ]
    },
    {
      titulo: 'Documentación de Software',
      descripcion: 'Entregamos un analisis limpio de lo que hace su software con un manual de usuario.',
      items: [
        'Todo trabajo que realizamos tiene sus documentación tecnica y manual de usuario correspondiente.',
        'Puede solicitar una documentación tecnica y/o manual de usuario acorde a su necesidad.'
      ]
    }
  ]

  return (
    <>
      <span className="content separador height-content">
        <div className='content-titles'>
          <Image alt='logo coinin studio' src={logoCoinin} />
          <h1 className={`${fontCoe.className}`} >Coinin Studio</h1>
          <h3>Desarrollo de Software</h3>
        </div>
      </span>
      <span className="content align-content-center separador content-services" id='servicios'>
        <h2>Servicios</h2>
        {servicios.map(servicio => (
          <Card key={servicio.titulo} titulo={servicio.titulo} descripcion={servicio.descripcion} items={servicio.items} ></Card>
        ))}
      </span>
      <span className="content separador border-bottom-seccion" id='portafolio'>
        <h2>Portafolio</h2>
        <div className='content content-carrousels'>
          {/*<video controls src={'/video/port-inmoclick.mp4'} />*/}
          <Link href={'/portafolio/gdosconstrucciones'}>
            <Carrousel images={gdc.images} autoPlay={true} titulo='GDosConstrucciones' descripcionSkils={['docker', 'mysql', 'git', 'react', 'node', 'sass']} />
          </Link>
          <Link href={'/portafolio/inmoclick'}>
            <Carrousel images={inmoclick.images} autoPlay={true} titulo='Inmoclick' descripcionSkils={['git', 'react', 'sass']} />
          </Link>
        </div>
      </span>
      <span className="content align-content-center separador content-skills border-bottom-seccion" id='tecnologias'>
        <h2>Tecnologías</h2>
        <Image className='icon' height="50" src={docker} alt='docker' />
        <Image className='icon' height="50" src={nginx} alt='nginx' />
        <Image className='icon' height="50" src={git} alt='git' />
        <Image className='icon' height="50" src={mongo} alt='mongo' />
        <Image className='icon' height="50" src={mysql} alt='mysql' />
        <Image className='icon' height="50" src={react} alt='react.js' />
        <Image className='icon' height="50" src={redux} alt='redux' />
        <Image className='icon' height="50" src={next} alt='next.js' />
        <Image className='icon' height="50" src={node} alt='node.js' />
        <Image className='icon' height="50" src={symfony} alt='symfony' />
        <Image className='icon' height="50" src={sass} alt='sass' />
        <Image className='icon' height="50" src={css} alt='css' />
        <Image className='icon' height="50" src={bootstrap} alt='bootstrap' />
        <Image className='icon' height="50" src={framerMotion} alt='framer motion' />
        <Image className='icon' height="50" src={html} alt='html' />
        <Image className='icon' height="50" src={js} alt='javascript' />
      </span>
      <span className="content separador" id='contacto'>
        <h2>Contacto</h2>
        <div className='content-form'>
          <FormConsulta />
        </div>
      </span>
    </>
  )
}
