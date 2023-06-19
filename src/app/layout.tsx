
import '../styles/globals.scss'
import '../styles/animates/slide.scss'
import '../styles/animates/scale.scss'
import './styles/layout.scss'
import { fontMontserratAlternates } from './models'
import { Navbar } from './components'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Coinin Studio',
  description: 'Desarrollo web'
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontMontserratAlternates.className}>
      <body>
        <Navbar />
        {children}
        <div className='content-footer'>
          <div className='content-redes-sociales'>
            <Link href={'https://www.linkedin.com/in/ailin-carribero'} target="_blank">
              <Image width={50} height={50} src={'/img/icon-redes-sociales/linkedin-white.svg'} alt='linkedin' />
            </Link>
            <Link href={'https://github.com/AilinCarribero'} target="_blank">
              <Image width={50} height={50} src={'/img/icon-redes-sociales/github-white.svg'} alt='git' />
            </Link>
          </div>
          <div className='content-herramientas'>
            <p>Esta web esta creada con:</p>
            <Image width={20} height={20} src={'/img/icons-skills/nextjs-white.svg'} alt='next.js' />
            <Image width={20} height={20} src={'/img/icons-skills/sass-white.svg'} alt='sass' />
          </div>
        </div>
      </body>
    </html>
  )
}
