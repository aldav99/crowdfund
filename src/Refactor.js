import React from 'react';
import { TableBooks, TheadBooks, Tbody, Tr, Td, Span } from './Table';
import { useMediaQuery } from 'react-responsive'
import { SubscribeModal } from './SubscribeModal';

import { TableRow } from "./pages/Book/components/TableRow";

export const Table = React.memo(({ rows, removeFromTable, columns }) => {
    console.log('render Table')

    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    rows.map(row => {
                        return (
                            <Tr key={row.id} >
                                <TableRow removeFromTable={removeFromTable} row={row} columns={columns} key={row.id} />
                                <Td><SubscribeModal /></Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </TableBooks>)
})

//-----------------------------------------------------------------------

export const MobileTable = React.memo(({ rows, removeFromTable, columns }) => {
    console.log('render MobileTable')

    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    rows.map(row => {
                        return (
                            <Tr key={row.id} >
                                <TableRow removeFromTable={removeFromTable} row={row} columns={columns} key={row.id} />
                                <Td><SubscribeModal /></Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </TableBooks>)
})

export const GenerateTable = ({ rows, removeFromTable, mobileColumns, columns }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })
    rows = rows.slice(0, 3)
    return (
        isDesktopOrLaptop ? <Table removeFromTable={removeFromTable} rows={rows} columns={columns} /> : <MobileTable removeFromTable={removeFromTable} rows={rows} columns={mobileColumns} />)
}
