import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"

export default function Geral() {
    const [saldo, setSaldo] = useState(0);
    const [totalEntradas, setTotalEntradas] = useState(0)
    const [totalSaidas, setTotalSaidas] = useState(0)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("transactions")) || [];

        const entradas = data.filter((t) => t.tipo === "entrada")
        const saidas = data.filter((t) => t.tipo === "saida")

        const totalEntradas = entradas.reduce((acc, t) => acc + Number(t.valor), 0);
        const totalSaidas = saidas.reduce((acc, t) => acc + Number(t.valor), 0);

        const saldoFinal = totalEntradas - totalSaidas
        setSaldo(saldoFinal)
        setTotalEntradas(totalEntradas)
        setTotalSaidas(totalSaidas)
    }, [])

    return (
        <section className="flex gap-2">
            <div className="card">
                <h3 className="subtitle">Saldo atual</h3>
                <span className="value">R${saldo.toFixed(2)}</span>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <FaArrowCircleUp className="text-green" size={12} />
                        <p className="text-green text-sm">R${totalEntradas.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaArrowCircleDown className="text-red" size={12} />
                        <p className="text-red text-sm">R${totalSaidas.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3 className="subtitle">Economias</h3>
                <span className="value">R$1000,50</span>
                <div className="flex items-center gap-1">
                    <FaArrowCircleUp className="text-green" size={12} />
                    <p className="text-green text-sm">R$00,50</p>
                </div>
            </div>
        </section>
    )
}
