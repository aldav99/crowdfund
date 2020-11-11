import React from 'react';

export function MobileTable(props) {
    return (
        <table>
            <tbody>
                {
                    props.rows.map((row, idxRow) => (
                        props.columns.map((column, idxColumn) => (
                            <tr key={idxRow.toString() + column.accessor}>
                                <td key={column.accessor + idxColumn.toString()}>
                                    {
                                        <b>{column.accessor}</b>
                                    }
                                </td>
                                <td key={row}>
                                    {
                                        column.cell
                                            ? <column.cell row={row} column={column} />
                                            : row[column.accessor]
                                    }
                                </td>
                            </tr>)
                        )
                    )
                    )
                }
            </tbody>
        </table>
    );
};
