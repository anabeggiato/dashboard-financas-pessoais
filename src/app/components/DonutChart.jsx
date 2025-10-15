"use client"
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
    const [gastosPorCategoria, setGastosPorCategoria] = useState({});

    useEffect(() => {
        const transacoes = JSON.parse(localStorage.getItem("transactions")) || [];
        const saidas = transacoes.filter((t) => t.tipo === "saida");

        const soma = saidas.reduce((acc, t) => {
            acc[t.categoria] = (acc[t.categoria] || 0) + Number(t.valor);
            return acc;
        }, {});

        setGastosPorCategoria(soma);
    }, []);

    const labels = [
        "Moradia",
        "Alimentação",
        "Transporte",
        "Lazer",
        "Educação",
        "Saúde",
        "Outros",
    ];

    const valores = labels.map((categoria) => gastosPorCategoria[categoria] || 0);

    const data = {
        labels,
        datasets: [
            {
                label: "Despesas (R$)",
                data: valores,
                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444",
                    "#8B5CF6",
                    "#EC4899",
                    "#9CA3AF",
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
                cutout: "70%",
                borderRadius: 5,
            },
        ],
    };


    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const value = context.raw;
                        return `R$ ${value.toLocaleString("pt-BR")}`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-full dark:bg-zinc-900">
            <Doughnut data={data} options={options} />
        </div>
    );
}
