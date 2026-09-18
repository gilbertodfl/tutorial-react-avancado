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
    <div className="products-page">
      <h1>Lista de Produtos</h1>
      {/* Renderizar uma lista */}
      <section className="product-filters" aria-label="Filtros de produtos">
        <div className="filter-group">
          <span className="filter-label">Filtro por categoria</span>
          <div className="filter-options">
            <button className={`filter-button ${categoria === "eletrônico" ? "is-active" : ""}`} onClick={() => filtrarPorCategoria("eletrônico")}>
              Eletrônico
            </button>
            <button className={`filter-button ${categoria === "vestuário" ? "is-active" : ""}`} onClick={() => filtrarPorCategoria("vestuário")}>
              Vestuário
            </button>
            <button className={`filter-button ${!categoria && !preco ? "is-active" : ""}`} onClick={limparFiltro}>
              Todos
            </button>
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Filtro por preço</span>
          <div className="filter-options">
            <button className={`filter-button ${preco === "4500" ? "is-active" : ""}`} onClick={() => filtrarPorPreco(4500)}>
              Até R$ 4.500
            </button>
            <button className={`filter-button ${preco === "200" ? "is-active" : ""}`} onClick={() => filtrarPorPreco(200)}>
              Até R$ 200
            </button>
            <button className={`filter-button ${preco === "150" ? "is-active" : ""}`} onClick={() => filtrarPorPreco(150)}>
              Até R$ 150
            </button>
          </div>
        </div>
      </section>
      <ul className="product-list">
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

