import React from 'react'
import { Link, useNavigate } from 'react-router'

export function Header() {
    const navigate = useNavigate();
  return (
    <header className="site-header">
        <h1>Eu sou o header</h1>
      <nav className="site-nav" aria-label="Navegação principal">
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/products">Produtos</Link>
        <button className="back-button" onClick={() => navigate(-1)}>Voltar</button>
        </nav>
    </header>
  )
}

