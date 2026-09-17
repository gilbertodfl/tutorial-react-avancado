# OBJETIVO: Navegação Programática com useNavigate

Vamos usar  `useNavigate`

Projeto didático para praticar navegação no React com React Router. A aplicação
exibe uma lista de produtos, permite filtrá-la por categoria e preço e abre uma
página de detalhes para cada produto.

App.jsx
```
import React from "react";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App; // ← mude para default
```
components/Navigation.jsx
```
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


```
## Tecnologias

- React 19
- React Router 8
- Vite
- JavaScript (ES modules)

## Como executar

É necessário ter o Node.js instalado.

```bash
# Instala as dependências
npm install

# Inicia o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173/
```

Outros comandos disponíveis:

```bash
npm run build    # Gera a versão de produção
npm run preview  # Serve a versão de produção localmente
npm run lint     # Verifica problemas apontados pelo ESLint
```

## Como testar a aplicação



## Entendendo as rotas

As rotas ficam em `src/routes/AppRoutes.jsx`:

| URL | Componente | Função |
| --- | --- | --- |
| `/` | `Home` | Página inicial |
| `/about` | `About` | Página sobre |
| `/contact` | `Contact` | Página de contato |
| `/products` | `Products` | Lista e filtros |
| `/products/:id` | `Details` | Detalhes de um produto |
| qualquer outra | `NotFound` | Página não encontrada |

O trecho `:id` é um parâmetro dinâmico. Isso significa que a mesma rota pode
atender `/products/1`, `/products/2` e outros valores.

## `useParams`: lendo o `id`

Em `src/pages/Details.jsx`, o hook lê o valor definido na rota:

```jsx
const { id } = useParams();
const produto = produtos.find((produto) => produto.id === id);
```

O valor chega como texto. Por isso, ele é comparado com os `id`s que também
estão definidos como strings em `src/assets/data.js`.

Depois da busca, o componente segue um destes caminhos:

- Se encontrar o produto, mostra nome, categoria, preço e descrição.
- Se não encontrar, mostra uma mensagem e um link para voltar à lista.

