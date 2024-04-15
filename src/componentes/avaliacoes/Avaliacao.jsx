import React from "react";

export default function Avaliacao({ nomeFilme, descricao, nota }) {
    return (
        <div className="container" style={{ display: "block" }}>
            <h3 style={{ margin: "5px" }}>{nomeFilme}</h3>
            <p style={{ margin: "5px" }}>{descricao} - {nota}</p>
        </div>
    );
}