import React from "react";
import DataTable from 'react-data-table-component';

export default function ListaAvaliacoes2({ avaliacoes = [], setIdEmEdicao }) {

    const colunas = [
        {
            name: 'Nome do Filme',
            selector: row => row.nomeFilme,
            sortable: true,
        },
        {
            name: 'descrição',
            selector: row => row.descricao,
        },
        {
            name: 'NOTA',
            selector: row => row.nota,
        },
    ];

    const opcoes = { rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' };

    async function handleChange({selectedRows}) {
        const id = selectedRows[0]?.id;
        if(id) {
            setIdEmEdicao(id);
        } else {
            setIdEmEdicao("");
        }        
    }

    return (
        <DataTable
        columns={colunas}
        data={avaliacoes}
        pagination
        paginationPerPage={5}
        dense
        responsive
        striped
        paginationComponentOptions={opcoes}
        noDataComponent="Cadastro Vazio"
        defaultSortFieldId={1}
        selectableRows
        selectableRowsHighlight
        selectableRowsSingle
        onSelectedRowsChange={handleChange}
        />
    )
}
