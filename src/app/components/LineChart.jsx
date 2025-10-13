"use client"
import React from 'react'
import {Line} from "react-chartjs-2"
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, plugins, scales } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function LineChart() {
    const data = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Gastos por semana",
                data: [1000, 2000, 1500, 3000, 2500, 2000, 1980, 1200, 1680, 3000, 2000, 4000],
                borderColor: "#3E3C8D",
                fill: true,
                tension: 0.4,
                pointBackgroundColor: "#3E3C8D",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {display: false},
            tooltip: {
                callbacks: {
                    label: (context) => `R$ ${context.raw.toLocaleString("pt-BR")}`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}
