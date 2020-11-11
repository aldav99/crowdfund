import React from 'react';

export const TableCell = ({ column, row }) => {
    return (
        column.cell
            ? <column.cell row={row} column={column} />
            : row[column.accessor]
    );
};

