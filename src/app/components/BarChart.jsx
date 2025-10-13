"use client"
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, plugins } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
    const data = {
        labels: [
            "S1",
            "S2",
            "S3",
            "S4"
        ],
        datasets: [
            {
                label: "gastos por semana",
                data: [300, 200, 250, 100],
                backgroundColor: "#3E3C8D",
                barThickness: 40,
            },
        ],
    };

    const options = {
        responsive: true,
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
        scales: {
            y: {
                ticks: {
                    callback: (value) => `${value}`,
                    stepSize: 50,
                },
            },
        }

    };

    return (
        <div className="w-full dark:bg-zinc-900">
            <Bar data={data} options={options} />
        </div>
    )
}
