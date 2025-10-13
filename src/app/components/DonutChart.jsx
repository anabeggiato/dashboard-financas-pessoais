"use client"
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
    const data = {
        labels: [
            "Moradia",
            "Alimentação",
            "Transporte",
            "Lazer",
            "Educação",
            "Saúde",
            "Outros",
        ],
        datasets: [
            {
                label: "Despesas (R$)",
                data: [1200, 850, 300, 450, 600, 250, 200],
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
                borderRadius: 5
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
        <div className="h-[100px] dark:bg-zinc-900">
            <Doughnut data={data} options={options} />
        </div>
    );
}
