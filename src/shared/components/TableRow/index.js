import React from 'react';
import { Td } from "../../elements/Table"
import RoyaltyCell from "./cells/RoyaltyCell";
import { AuthorsCell } from './cells/AuthorTableCell';
import { LinkCell } from './cells/LinkCell';
import { CoverCell } from './cells/CoverCell';
import { CloseCell } from './cells/CloseCell';
import { ProgressCell } from './cells/ProgressCell'
import { SubscriberCell } from './cells/SubscriberCell'
import { SubscribeModal } from './cells/SubscribeModal'

export { RoyaltyCell, AuthorsCell, CoverCell, LinkCell, CloseCell, ProgressCell, SubscriberCell, SubscribeModal };

export const TableRow = ({ row, columns }) => {
    if (!row)
        return null;

    return columns.map(column => {
        const CellComponent = column.cell;
        return (
            <Td key={column.accessor}>
                {CellComponent ? <CellComponent row={row} column={column}
                    authors={row.authorsList} /> : row[column.accessor]}
            </Td>
        );
    });
};


