import React from 'react';
import { TableBooks, TheadBooks, Tbody, Tr, Td, Span } from "../../shared/elements/Table"
import { useMediaQuery } from 'react-responsive'
import { SubscribeModal } from './SubscribeModal';

import { TableRow } from '../Book/components/TableRow';

export const Table = React.memo(({ rows, columns }) => {
    console.log('render Table')

    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    rows.map(row => {
                        return (
                            <Tr key={row.id} >
                                <TableRow row={row} columns={columns} key={row.id} />
                                <Td><SubscribeModal /></Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </TableBooks>)
})

