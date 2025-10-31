"use client"
import React, { useState, useEffect, use } from 'react'
import Header from '../components/Header'
import Transactions from '../components/Transactions'

export default function page() {
  const [transacoes, setTransacoes] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    data.sort((a, b) => new Date(b.data) - new Date(a.data));
    setTransacoes(data)
  }, [])

  return (
    <div className='dark:bg-foreground min-h-screen dark:text-white'>
      <Header />
      <main className="p-5 space-y-4 mt-[65px] md:mt-[85px]">
        <h1 className="text-center">Últimas transações</h1>
        <section className="card">
          <Transactions transacoes={transacoes} />
        </section>
      </main>
    </div>
  )
}
