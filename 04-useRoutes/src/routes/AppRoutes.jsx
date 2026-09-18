import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { Details } from "../pages/Details";
import { Layout } from "../pages/Layout";

// nestet módulo este arquivo ficou apenas como documentação. Não vamos mais usar.
// migramos para funcionalidade do JsRoutes.jsx
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rotas internas */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Details />} />
      </Route>


      {/* Rota 404 - erro */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}