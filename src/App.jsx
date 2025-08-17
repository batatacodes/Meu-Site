import React from 'react'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Conceitos from './pages/Conceitos'
import Diagnostico from './pages/Diagnostico'
import Intervencoes from './pages/Intervencoes'
import Educacao from './pages/Educacao'
import VidaAdulta from './pages/VidaAdulta'
import Direitos from './pages/Direitos'
import Mitos from './pages/Mitos'
import Recursos from './pages/Recursos'
import Glossario from './pages/Glossario'

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Conceitos />
      <Diagnostico />
      <Intervencoes />
      <Educacao />
      <VidaAdulta />
      <Direitos />
      <Mitos />
      <Recursos />
      <Glossario />
    </>
  )
}

export default App
