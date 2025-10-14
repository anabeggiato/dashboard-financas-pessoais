"use client";
import React, { useState } from "react";

export default function AddTransaction({ showPopup, setShowPopup }) {
    const categorias = [
        { nome: "Moradia", id: 1 },
        { nome: "Alimentação", id: 2 },
        { nome: "Transporte", id: 3 },
        { nome: "Lazer", id: 4 },
        { nome: "Educação", id: 5 },
        { nome: "Saúde", id: 6 },
        { nome: "Outros", id: 7 },
    ];

    const [data, setData] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [valor, setValor] = useState(0);

    const addTransaction = () => {
        const novaTransacao = {
            id: Date.now(),
            data,
            tipo,
            descricao,
            categoria,
            valor: Number(valor),
        };

        const transacoesExistentes =
            JSON.parse(localStorage.getItem("transactions")) || [];

        const atualizadas = [...transacoesExistentes, novaTransacao];
        localStorage.setItem("transactions", JSON.stringify(atualizadas));

        alert("Transação adicionada com sucesso!");
        setShowPopup(false);
        window.location.reload()
    };

    if (!showPopup) return null;

    return (
        <div className="bg-subtitle/50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="bg-white rounded-md flex flex-col space-y-4 p-4 w-4/5 max-w-md">
                <h3 className="text-center font-semibold">Adicionar nova transação</h3>

                <div className="flex justify-between">
                    <label>Data</label>
                    <input
                        type="date"
                        onChange={(e) => setData(e.target.value)}
                        className="border rounded px-2"
                    />
                </div>

                <div className="flex justify-between">
                    <label>Tipo</label>
                    <select
                        onChange={(e) => setTipo(e.target.value)}
                        className="border rounded px-2"
                    >
                        <option value="">Selecione</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <label>Descrição</label>
                    <input
                        type="text"
                        onChange={(e) => setDescricao(e.target.value)}
                        className="border rounded px-2"
                    />
                </div>

                <div className="flex justify-between">
                    <label>Categoria</label>
                    <select
                        onChange={(e) => setCategoria(e.target.value)}
                        className="border rounded px-2"
                    >
                        <option value="">Selecione</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id}>{categoria.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-between items-center">
                    <label>Valor</label>
                    <div className="flex items-center gap-2">
                        <span>R$</span>
                        <input
                            type="number"
                            onChange={(e) => setValor(e.target.value)}
                            className="border rounded px-2 w-24"
                        />
                    </div>
                </div>

                <div className="flex justify-around mt-4">
                    <button
                        onClick={addTransaction}
                        className="bg-green text-white px-3 py-1 rounded"
                    >
                        Enviar
                    </button>
                    <button
                        onClick={() => setShowPopup(false)}
                        className="bg-gray-300 px-3 py-1 rounded"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
