import React from "react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada!</h1>
      <p>Ooops! Parace que esta rota não existe!</p>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
}