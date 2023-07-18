import React from 'react'
import './Index.css'
import Menu from './components/Menu'
import Seccioncelular from './components/Seccioncelular'
import Seccionmovil from './components/Seccionmovil'
import Plataforma from './components/Plataforma'
import Carteleria from './components/Carteleria'
import Discover from './components/Discover'
import Final from './components/Final.jsx'
import Footer from './components/Footer'


function App() {
  return (
    <div>
        <Menu />
        <Seccioncelular />
        <Seccionmovil />
        <Plataforma />
        <Carteleria />
        <Discover />
        <Final />
        <Footer />
    </div>
  )
}

export default App

