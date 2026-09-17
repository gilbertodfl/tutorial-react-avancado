import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Navigation() {

  const navigate = useNavigate()

  function handleAvancar() {
    navigate(1)
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
      <button onClick={()=> navigate("/")}>Voltar para Página Home</button>
      <button onClick={()=> navigate(-1)}>Página Anterior</button>
      <button onClick={handleAvancar}>Avançar</button>
    </>
  )
}


