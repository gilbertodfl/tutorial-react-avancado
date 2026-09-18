import React from 'react'
import { useNavigate } from 'react-router';

export function Admin() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("isAdmin");
        navigate("/login");
    }
  return (
    <div>
        <h1>Painel do Administrador - Protegida</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

