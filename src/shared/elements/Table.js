import React from 'react';
import { TableCell } from './TableCell';

export function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        props.columns.map((column, idx) => (
                            <th key={idx}>{column.Header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map((row, idx) => (
                        <tr key={idx}>
                            {
                                props.columns.map((column, idx) => (
                                    <td key={idx}>
                                        <TableCell column={column} row={row} />
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};



