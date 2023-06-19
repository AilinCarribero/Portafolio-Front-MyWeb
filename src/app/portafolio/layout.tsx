import React from 'react'
import './styles/portafolio.scss'
import { Navbar } from '../components'

function LayoutPortafolio({ children }: { children: React.ReactNode }) {
  return (
    <div className='content-portafolio' >
      {children}
    </div>
  )
}

export default LayoutPortafolio