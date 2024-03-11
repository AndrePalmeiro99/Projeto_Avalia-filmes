import { useEffect, useState } from "react";
import FormAvaliacao from "../componentes/avaliacoes/FormAvaliacao"
import { listarAvaliacoes } from "../infra/avaliacoes";
import ListaAvaliacoes2 from "../componentes/avaliacoes/ListaAvaliacoes2";


export default function Avaliacoes() {

    const [avaliacoes, setAvaliacoes] = useState([]);
    const [avaliacaoId, setAvaliacaoId] = useState("");

    useEffect(() => {
        async function fetchData() {
            let data = await listarAvaliacoes();
            setAvaliacoes(data);
        }

        fetchData();
    }, [avaliacaoId]);

    return (
        <div>
            <h2 className="titulo">Deixe aqui sua avaliação sobre um filme</h2>
            <FormAvaliacao setAvaliacaoId={setAvaliacaoId}/>
            <ListaAvaliacoes2 avaliacoes={avaliacoes} />
        </div>
    )
}