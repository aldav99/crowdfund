import React from 'react';

import { Link } from 'react-router-dom';

export const LinkCell = ({ column, row }) => {
    return (
        <Link to={`/book/${row.Id}`}>{row[column.accessor]}</Link>
    );
};