import Image from "next/image";
import Header from "./components/Header";
import Geral from "./components/Geral";
import DonutChart from "./components/DonutChart";

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

  return (
    <div>
      <Header />
      <main className="p-5 space-y-4">
        <h1 className="text-black">Olá, Usuário! Bem-vindo de volta!</h1>
        <Geral />

        <section className="card flex items-center p-4">
          <div className="mr-5">
            <DonutChart />
          </div>

          <div>
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
      </main>
    </div>
  );
}
