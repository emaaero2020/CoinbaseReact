import React from 'react'
import logo from './imagenes/logo.png'

function Menu() {
  return (
    <div>
        <nav className="nav">
      <div className="logo">
        <a href="http://coinbase.com">
          <img src= { logo } alt="logo" />
        </a>
      </div>

      <div className="menu d-none d-md-block">
        <ul className="main-menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Individuales</a></li>
          <li><a href="#">Estilos</a></li>
          <li><a href="#">Hostorial</a></li>
          <li><a href="#">Compañia</a></li>
        </ul>
      </div>

      <div className="get-started">
        <button className="btn-sec-s">Entrar</button>
        <button className="btn-main-s">Registrate</button>
      </div>
    </nav>
    </div>
  )
}

export default Menu