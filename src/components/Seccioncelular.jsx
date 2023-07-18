import React from 'react'
import wallet from './imagenes/wallet.png'

function Seccioncelular() {
  return (
    <div>
        <section className="sec-home">
      <div className="home-cta">
        <div className="cta-text">
          <span>Entra a tu portafolio web</span>
          <i className="bi bi-arrow-right"></i>
        </div>
        <h2 className="home-title h1">Crea tu portafolio web ahora</h2>
        <p className="home-description">
          Combina estas estrategias para desarrolladores web y obtiene
          las mejores ofertas laborales
        </p>
        <div className="lead-magnet row align-items-center">
          <div className="col input-col">
            <input
              type="text"
              className="form-control input-text"
              placeholder="Enviar email"
            />
          </div>
          <div className="col">
            <button className="btn-main">Registrate</button>
          </div>
        </div>
      </div>
      <div className="home-img d-none d-md-block">
        <img src= { wallet } alt="wallet" />
      </div>
    </section>
    </div>
  )
}

export default Seccioncelular