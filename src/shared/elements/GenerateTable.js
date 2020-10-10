import React from 'react';
import { useMediaQuery } from 'react-responsive'

export const GenerateTable = ({ TableName, rows, mobileColumns, columns, limitOfString = 10 }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })
    rows = rows.slice(0, limitOfString)
    return (
        isDesktopOrLaptop ? <TableName rows={rows} columns={columns} /> : <TableName rows={rows} columns={mobileColumns} />)
}
