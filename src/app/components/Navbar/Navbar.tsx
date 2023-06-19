'use client'

import React, { useEffect, useState } from 'react'
import './navbar.scss'
import Image from 'next/image'
import { fontCoe } from '@/app/models'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { isDesktop } from 'react-device-detect'

function Navbar() {
    const path = usePathname();

    const [isDesktopState, setIsDesktopState] = useState(false);

    useEffect(() => {
        setIsDesktopState(isDesktop)

        return () => { }
    }, [])

    return (
        <div className='content-navbar'>
            <Link className='link-logo-home' scroll={true} href={'/'} >
                <Image src="/img/logo-v1.svg" width={200} height={200} alt='Coinin Studio' />
                <h3 className={`${fontCoe.className}`} >Coinin Studio</h3>
            </Link>
            {(path == '/') &&
                <div className='content-link-navigation' hidden={!isDesktopState}>
                    <Link href={'/#servicios'} scroll={false}>Servicios</Link>
                    <Link href={'/#portafolio'} scroll={false}>Portafolio</Link>
                    <Link href={'/#tecnologias'} scroll={false}>Tecnologías</Link>
                    <Link href={'/#contacto'} scroll={false}>Contacto</Link>
                </div>
            }
        </div>
    )
}

export default Navbar