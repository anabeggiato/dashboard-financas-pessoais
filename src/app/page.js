"use client"
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Geral from "./components/Geral";
import DonutChart from "./components/DonutChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Transactions from "./components/Transactions";
import { FaPlusCircle } from "react-icons/fa"
import AddTansaction from "./components/AddTansaction";

export default function Home() {
  const legendas = [
    { categoria: "Moradia", cor: "#3B82F6" },
    { categoria: "Alimentação", cor: "#10B981" },
    { categoria: "Transporte", cor: "#F59E0B" },
    { categoria: "Lazer", cor: "#EF4444" },
    { categoria: "Educação", cor: "#8B5CF6" },
    { categoria: "Saúde", cor: "#EC4899" },
    { categoria: "Outros", cor: "#9CA3AF" },
  ];

  const [showPopup, setShowPopup] = useState(false);

      const [transacoes, setTransacoes] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("transactions")) || [];
        const ultimas = data.slice(-5)
        setTransacoes(ultimas)
    }, [])

  return (
    <div className="space-y-4">
      <Header />
      <main className="p-5 space-y-4 mt-[65px] md:mt-[85px]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-black text-2xl">Olá, bem-vindo de volta!</h1>
          <FaPlusCircle onClick={() => setShowPopup(!showPopup)} size={20} />
          {showPopup && <AddTansaction showPopup={showPopup} setShowPopup={setShowPopup} />}
        </div>
        <Geral />

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 space-y-4">
          <section className="card flex items-center p-4">
            <div className="mr-5 w-1/3">
              <DonutChart />
            </div>

            <div className="w-2/3">
              <p className="font-medium mb-2">Gastos por categoria</p>
              <div className="grid grid-cols-2 gap-2">
                {legendas.map((legenda) => (
                  <div key={legenda.categoria} className="flex items-center gap-2">
                    <div
                      className="w-[12px] h-[12px] rounded-sm"
                      style={{ backgroundColor: legenda.cor }}
                    />
                    <p className="text-sm text-gray-700">{legenda.categoria}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="card flex flex-col align-items-center">
            <h1 className="text-center">Gastos por semana</h1>
            <BarChart />
          </section>

          <section className="card">
            <h1 className="text-center">Gastos por mês</h1>
            <LineChart />
          </section>
          <div />
        </div>

        <section className="card">
          <h1 className="text-center">Últimas transações</h1>
          <Transactions transacoes={transacoes}/>
        </section>
      </main>
    </div>
  );
}
