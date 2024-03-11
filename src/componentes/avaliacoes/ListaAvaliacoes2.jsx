import React from "react";
import DataTable from 'react-data-table-component';

export default function ListaAvaliacoes2({ avaliacoes = [] }) {

    const colunas = [
        {
            name: 'Nome do Filme',
            selector: row => row.nomeFilme,
            sortable: true,
        },
        {
            name: 'categoria',
            selector: row => row.categoria,
        },
        {
            name: 'NOTA',
            selector: row => row.nota,
        },
    ];

    const opcoes = { rowsPerPageText: 'Linhas por página:', rangeSeparatorText: 'de' };

    function handleRowSelect({selectedRows}) {
        console.log(selectedRows[0]?.id);
    }

    return (
        <DataTable
            columns={colunas}
            data={avaliacoes}
            pagination
            paginationPerPage={10}
            dense
            responsive
            striped
            paginationComponentOptions={opcoes}
            defaultSortFieldId={1}
            onSelectedRowsChange={handleRowSelect}
        />
    )
}
