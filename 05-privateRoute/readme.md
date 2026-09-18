
# OBJETIVO: criar rotas protegidas - useNavigate

vamos usar 

localStorage.setItem("isAdmin", "true"); // salvando
navigate("/admin");

saindo: 

        localStorage.removeItem("isAdmin");
        navigate("/login");


criar um arquivo que centraliza: PrivateRoute.jsx
```
import React from 'react'
import { Navigate } from 'react-router';

export function PrivateRoute({children}) {
    // Simulação de Login
    const isAuthenticated = localStorage.getItem("isAdmin") === "false";
  return isAuthenticated ? children : <Navigate to="/login"/>
}
```

No JsRoutes.jsx colocamos abaixo para rotas progetidas, por exemplo, admin

```
    { path: '/admin', element: 
                            <PrivateRoute> 
                                <Admin />
                             </PrivateRoute>
    },
```