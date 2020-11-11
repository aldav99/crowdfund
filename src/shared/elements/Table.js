import React from 'react';

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
                                        {
                                            column.cell
                                                ? <column.cell row={row} column={column} />
                                                : row[column.accessor]
                                        }
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


