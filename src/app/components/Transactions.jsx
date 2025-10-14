"use client"
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown, FaEdit, FaTrash } from "react-icons/fa";

export default function Transactions() {

    const [transacoes, setTransacoes] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransacoes(data)
    }, [])

    const legendas = [
        { categoria: "Moradia", cor: "#3B82F6" },
        { categoria: "Alimentação", cor: "#10B981" },
        { categoria: "Transporte", cor: "#F59E0B" },
        { categoria: "Lazer", cor: "#EF4444" },
        { categoria: "Educação", cor: "#8B5CF6" },
        { categoria: "Saúde", cor: "#EC4899" },
        { categoria: "Outros", cor: "#9CA3AF" },
    ];

    // Função para formatar datas
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    // Função para pegar a cor da categoria
    const getCategoryColor = (categoria) => {
        const legend = legendas.find(l => l.categoria === categoria);
        return legend ? legend.cor : "#000";
    };

    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="min-w-full text-center border-collapse">
                    <thead>
                        <tr className="text-sm border-b">
                            <th className="p-2">Data</th>
                            <th className="p-2">Tipo</th>
                            <th className="p-2">Descrição</th>
                            <th className="p-2">Categoria</th>
                            <th className="p-2">Valor</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transacoes.map((transaction) => (
                            <tr key={transaction.id} className="text-sm">
                                <td className="py-2 font-normal text-center align-middle">{formatDate(transaction.data)}</td>

                                <td className="flex justify-center items-center">
                                    {transaction.tipo === "entrada"
                                        ? <FaArrowCircleUp className="text-green" />
                                        : <FaArrowCircleDown className="text-red" />}
                                </td>

                                <td className="py-2 font-normal text-center align-middle">
                                    {transaction.descricao}
                                </td>

                                <td className="py-2 font-normal flex justify-center items-center align-center">
                                    <div
                                        className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                                        style={{ backgroundColor: getCategoryColor(transaction.categoria) }}
                                    />
                                </td>

                                <td className="py-2 font-normal text-center align-middle">{transaction.valor}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}
