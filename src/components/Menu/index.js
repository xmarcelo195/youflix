import React from 'react'
import Logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Logo Youflix' />
            </a>

            <Button as='a' className='ButtonLink' href="/" >
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu //vrauuu
