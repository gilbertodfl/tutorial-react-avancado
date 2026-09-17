import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Navigation() {

  const rotas = ['/', '/about', '/contact', '/products']
  const [indiceAtual, setIndiceAtual] = React.useState(0)
  const navigate = useNavigate()

  function handleAvancar() {
    if (indiceAtual < rotas.length - 1) {
      const proximoIndice = indiceAtual + 1
      setIndiceAtual(proximoIndice)
      console.log('handleAvancar - indiceAtual:', proximoIndice)
      navigate(rotas[proximoIndice])
    }
  }
  function handleHome() {
      setIndiceAtual(0)
      navigate("/")
   }
  function handleVoltar() {
    if (indiceAtual > 0) {
      const indiceAnterior = indiceAtual - 1
      setIndiceAtual(indiceAnterior)
      console.log('handleVoltar - indiceAtual:', indiceAnterior)
      navigate(rotas[indiceAnterior])
    }
    //  else {
    //   setIndiceAtual(rotas.length - 1)
    // }
    //navigate(-1)
  }
  return (
    <>
      <nav>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">Google</a>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/products">Produtos</Link>
      </nav>
          <br />
      <button onClick={()=> handleHome()} disabled={indiceAtual === 0}>Voltar para Página Home</button>
      <button onClick={()=> handleVoltar()} disabled={indiceAtual === 0}>
        Página Anterior
      </button>
      <button onClick={handleAvancar} disabled={ indiceAtual >= rotas.length - 1 }>
        Avançar
      </button>
    </>
  )
}

