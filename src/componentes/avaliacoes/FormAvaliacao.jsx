import React from "react";
import { useForm } from "react-hook-form";
import { inserirAvaliacao } from "../../infra/avaliacoes";

export default function FormAvaliacao({ setAvaliacaoId }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function submeterDados(dados) {
        let id = await inserirAvaliacao(dados);
        setAvaliacaoId(id);
        reset();
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label className="texto" htmlFor="nomeFilme">Nome do Filme: </label>&nbsp;
                    <input size={20} className="caixaForm" {...register("nomeFilme", {
                        required: "Nome do Filme é obrigatório",
                        validate: {
                            maxLength: (value) => value.length <= 20 || "Nome do filme só pode ter até 20 caracteres",
                        },
                    })} />
                    <br />
                    <label className="texto" htmlFor="categoria">Categoria: </label>&nbsp;
                    <input size={50} className="caixaForm" {...register("categoria", {
                        required: "categoria do filme é obrigatória",
                    })} />
                    <br />
                    <label className="texto" htmlFor="nota">Nota do filme: </label>&nbsp;
                    <input size={14} className="caixaNota" {...register("nota", {
                        required: "Nota é obrigatória",
                    })} />
                    <br />
                    <input style={{ margin: "5px auto", display: "block" }} type="submit" value="Salvar" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                </form>
            </div>
            <div className="errorsContainer">
                {errors.nomeFantasia?.message && (
                    <div>{errors.nomeFantasia.message}</div>
                )}
            </div>
        </>
    )
}