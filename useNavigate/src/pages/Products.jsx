import React from "react";
import { Link, useSearchParams } from "react-router";
import produtos from "../assets/data";

export function Products() {
  //const params = useSearchParams()
  //console.log(params)
  const [searchParams, setSearchParams]=useSearchParams()
  const categoria = searchParams.get("categoria")
  const preco = searchParams.get('preco')

  if (preco ) console.log('Filtrar por preco ' + preco)
  if (categoria ) console.log('Filtrar por categoria ' + categoria)

   // Aqui construimos os itens filtrados.
  const produtosFiltrados = produtos.filter( (produto) => 
    {
      // situação sem filtro
      if (categoria == null && preco == null) 
        return true
      else{
        const categoriaFiltrada = categoria 
          ? produto.categoria === categoria 
          : true
        const precoFiltrado = preco ? produto.preco <= preco : true
        return categoriaFiltrada && precoFiltrado
      }
    } 
  )

  // aqui atualizamos a URL.   
  const filtrarPorCategoria = (categoria) => {
    const params ={}
    if (categoria) params.categoria = categoria
    if( preco ) params.preco = preco
    setSearchParams(params)
  }
  // filtro por preço
  const filtrarPorPreco = (preco) =>{
    const params={}
    if( preco ) params.preco = preco
    if (categoria) params.categoria = categoria
    setSearchParams(params)

  }
  // limpar filtro
  const limparFiltro = () => {setSearchParams({})}

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {/* Renderizar uma lista */}
       <span> Filtro por categoria </span>
       <button onClick={() => filtrarPorCategoria("eletrônico")}>Eletrônico</button>
       <button onClick={() => filtrarPorCategoria("vestuário")}>Vestuário</button>
       <button onClick={() => limparFiltro()}>Todos</button>
      <span> Filtro por preço </span>
      <button onClick={() => filtrarPorPreco(4500)}>Até 4500</button>
      <button onClick={() => filtrarPorPreco(200)}>Até 200</button>
      <button onClick={() => filtrarPorPreco(150)}>Até 150</button>
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            <Link to={`/products/${produto.id}`}>{produto.nome} = {produto.preco}</Link>
          </li>
        ))}
        {produtosFiltrados.length === 0 && <p>Sem dados!</p>} 
      </ul>
    </div>
  );
}




















/* 
Hook useSearchParams - Como funciona
Ele retorna um array com dois elementos:
- searchParams – um objeto que representa os parâmetros atuais da URL.
- setSearchParams – uma função que permite atualizar esses parâmetros.

Descontrução: const [searchParams, setSearchParams] = useSearchParams();
*/

