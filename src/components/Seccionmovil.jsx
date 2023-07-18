import React from 'react'
import chart from './imagenes/chart.png'

function Seccionmovil() {
  return (
    <div>
        <section className="sec-features">
      <div className="intro">
        <h3>Create your cryptocurrency portfolio today</h3>
        <p>
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
      </div>
      <div className="features">
        <div className="text">
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-graph-up"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Manage your portfolio</h4>
              <p className="description-text">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-calendar"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Recurring buys</h4>
              <p className="description-text">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="icon-sm">
              <i className="bi bi-phone"></i>
            </span>
            <div className="description">
              <h4 className="description-title">Mobile apps</h4>
              <p className="description-text">
                Stay on top of the markets with the Coinbase app for Android or
                iOS.
              </p>
            </div>
          </div>
        </div>
        <div className="image d-none d-md-block">
          <img src= { chart } alt="chart" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Seccionmovil