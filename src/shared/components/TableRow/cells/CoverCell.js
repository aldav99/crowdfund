import React from 'react';

export const CoverCell = ({ column, row }) => {
    return (
            row[column.accessor] && <img src={row[column.accessor]} width="40" height="40"></img>
    );
};

