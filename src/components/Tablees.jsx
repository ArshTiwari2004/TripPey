import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const Tables = ({ data }) => {
    const columns = React.useMemo(
        () => [
            { Header: 'Item Name', accessor: 'itemName' },
            { Header: 'Quantity Available', accessor: 'quantityAvailable' },
            { Header: 'Unit Cost', accessor: 'unitCost' },
            { Header: 'Last Replenished', accessor: 'lastReplenished' },
            { Header: 'Critical Status', accessor: 'criticalStatus' }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state: { pageIndex }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }
        },
        useSortBy,
        usePagination
    );

    return (
        <div className="bg-gray-300 rounded-lg shadow-md p-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Inventory Details</h2>
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="w-full border-collapse">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="p-4 text-left font-semibold bg-gray-200 border-b"
                                    >
                                        {column.render('Header')}
                                        <span className="ml-1">
                                            {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="p-4 border border-gray-200"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-6">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Previous
                </button>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {page.length}
                    </strong>
                </span>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Tables;
