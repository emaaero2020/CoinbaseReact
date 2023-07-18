import React from 'react'

function Plataforma() {
  return (
    <div>
        <section className="sec-benefits">
      <div className="intro">
        <h3>The most trusted cryptocurrency platform</h3>
        <p>Here are a few reasons why you should choose Coinbase</p>
      </div>
      <div className="benefit-cards row">
        <div className="benefit col-md">
          <i className="bi bi-eye-fill"></i>
          <div className="description">
            <h4 className="title">Secure storage</h4>
            <p className="text">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
          </div>
          <p className="cta">Learn how Coinbase keeps your funds safe and secure</p>
        </div>
        <div className="benefit col-md">
          <i className="bi bi-envelope-fill"></i>
          <div className="description">
            <h4 className="title">Protected by insurance</h4>
            <p className="text">
              Coinbase maintains crypto insurance and all USD cash balances are
              covered by FDIC insurance, up to a maximum of $250,000.
            </p>
          </div>
          <p className="cta my-4">
            Learn how your crypto is covered by our insurance policy
          </p>
        </div>
        <div className="benefit col-md">
          <i className="bi bi-shield-shaded"></i>
          <div className="description">
            <h4 className="title">Industry best practices</h4>
            <p className="text">
              Coinbase supports a variety of the most popular digital
              currencies.
            </p>
          </div>
          <p className="cta">
            Learn how we implement industry best practices for account security
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Plataforma