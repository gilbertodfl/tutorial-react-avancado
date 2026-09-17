import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export function Layout() {
  return (
    <>
    <Header/>

    {/* Conteúdo interno - página  - FILHA*/}
    <Outlet/>

    <Footer/>
    </>
  )
}

