import { useEffect, useState } from "react";
import FormAvaliacao from "../componentes/avaliacoes/FormAvaliacao"
import { listarAvaliacoes } from "../infra/avaliacoes";
import ListaAvaliacoes2 from "../componentes/avaliacoes/ListaAvaliacoes2";


export default function Avaliacoes() {

    const [avaliacoes, setAvaliacoes] = useState([]);
    const [idEmEdicao, setIdEmEdicao] = useState("");

    useEffect(() => {
        async function fetchData() {
            if (idEmEdicao === "" || avaliacoes.filter((item) => item.id === idEmEdicao).length === 0) {
                let data = await listarAvaliacoes();
                setAvaliacoes(data);
            }
        }

        fetchData();
    }, [idEmEdicao]);

    return (
        <div>
            <h2 className="titulo">Deixe aqui sua avaliação sobre um filme</h2>
            <FormAvaliacao idEmEdicao={idEmEdicao} setIdEmEdicao={setIdEmEdicao} />
            <ListaAvaliacoes2 avaliacoes={avaliacoes} setIdEmEdicao={setIdEmEdicao} />
        </div>
    )
}