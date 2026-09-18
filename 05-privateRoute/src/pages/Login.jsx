import React from 'react'
import { useNavigate } from 'react-router';

export function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
    }
  return (
    <div>
        <h1>Painel do Usuário - login </h1>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
