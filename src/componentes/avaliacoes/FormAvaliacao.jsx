import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { inserirAvaliacao, excluirAvaliacao, obterAvaliacao, alterarAvaliacao } from "../../infra/avaliacoes";
import { regexNota } from "../../regex.js";

export default function FormAvaliacao({ idEmEdicao, setIdEmEdicao }) {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    useEffect(() => {
        async function fetchData() {
            if (idEmEdicao) {
                const avaliacao = await obterAvaliacao(idEmEdicao);
                setValue("nomeFilme", avaliacao.nomeFilme);
                setValue("descricao", avaliacao.descricao);
                setValue("nota", avaliacao.nota);
            } else {
                reset();
            }
        }
        fetchData();
    }, [idEmEdicao]);

    async function submeterDados(dados) {
        if (idEmEdicao) {
            await alterarAvaliacao({ ...dados, id: idEmEdicao });
        } else {
            let id = await inserirAvaliacao(dados);
        }
        setIdEmEdicao("");
    }

    async function handleExcluir() {
        await excluirAvaliacao(idEmEdicao);
        setIdEmEdicao("");
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label className="texto" htmlFor="nomeFilme">Nome do Filme: </label>&nbsp;
                    <input size={30} className="caixaForm" {...register("nomeFilme", {
                        required: "Nome do Filme é obrigatório",
                        validate: {
                            maxLength: (value) => value.length <= 30 || "Nome do filme só pode ter até 30 caracteres",
                        },
                    })} />
                    <br />
                    <label className="texto" htmlFor="descricao">Descrição: </label>&nbsp;
                    <input size={300} className="caixaForm" {...register("descricao", {
                        required: "Descrição do filme é obrigatória",
                        validate: {
                            maxLength: (value) => value.length <= 300 || "Descrição só pode ter até 300 caracteres"
                        }
                    })} />
                    <br />
                    <label className="texto" htmlFor="nota">Nota do filme: </label>&nbsp;
                    <input size={14} className="caixaNota" {...register("nota", {
                        required: "Nota é obrigatória",
                        validate: {
                            matchPattern: (value) => regexNota.test(value) || "Nota inválida",
                        },
                    })} />
                    <br />
                    <input style={{ margin: "5px auto", display: "block" }} type="submit" value="Salvar" className="button" />
                    <input style={{ margin: "5px auto", display: "inline-block" }} type="button" value="Excluir" className="button" onClick={handleExcluir} />
                </form>
            </div>
            <div className="errorsContainer">
                {errors.nomeFilme?.message && (
                    <div>{errors.nomeFilme.message}</div>
                )}
                {errors.descricao?.message && (
                    <div>{errors.descricao.message}</div>
                )}
                {errors.nota?.message && (
                    <div>{errors.nota.message}</div>
                )}
            </div>
        </>
    )
}