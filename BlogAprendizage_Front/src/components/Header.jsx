import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <h1>Blog de Aprendizaje</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/publications">Publicaciones</Link>
            </nav>
        </header>
    )
}

export default Header
