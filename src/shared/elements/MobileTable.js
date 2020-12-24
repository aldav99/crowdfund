import React from 'react';
import { TableCell } from './TableCell';

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
                                    <TableCell column={column} row={row} />
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
