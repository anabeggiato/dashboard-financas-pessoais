import React from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa"

export default function Geral() {
    return (
        <section className="grid grid-cols-2 gap-2">
            <div className="card">
                <h3 className="subtitle">Saldo atual</h3>
                <span className="value">R$100,00</span>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <FaArrowCircleUp className="text-green" size={12} />
                        <p className="text-green text-sm">R$150,00</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaArrowCircleDown className="text-red" size={12} />
                        <p className="text-red text-sm">R$50,00</p>
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
