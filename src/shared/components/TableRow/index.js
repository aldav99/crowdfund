import React from 'react';
import { Td, Span } from "../../elements/Table"
import styles from "./TableRow.module.css"
import { Link } from 'react-router-dom';
import RoyaltyCell from "./cells/RoyaltyCell";
import { AuthorsCell } from './cells/AuthorTableCell';
import { LinkCell } from './cells/LinkCell';
import { CoverCell } from './cells/CoverCell';
import { CloseCell } from './cells/CloseCell';
import { ProgressCell } from './cells/ProgressCell'

export { RoyaltyCell, AuthorsCell, CoverCell, LinkCell, CloseCell, ProgressCell };

export const SubscriberCell = ({ column, row }) => {
    if (row.subscriber > 10)
        return (
            <React.Fragment>
                <Span>{column.Header}</Span><b className={styles.letter}>{row.subscriber}</b>
            </React.Fragment>
        );
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row.subscriber}
        </React.Fragment>);
};


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

export let columns = [
    { Header: '', accessor: 'title', cell: LinkCell },
    { Header: '', accessor: 'close', cell: CloseCell },
    { Header: '', accessor: 'brief' },
    { Header: '', accessor: 'page' },
    { Header: '', accessor: 'lang' },
    { Header: '', accessor: 'progress', cell: ProgressCell },
    { Header: '', accessor: 'cover', cell: CoverCell },
    { Header: '', accessor: 'authors', cell: AuthorsCell },
    { Header: '', accessor: 'minCost' },
    { Header: '', accessor: 'royalty', cell: RoyaltyCell },
    { Header: '', accessor: 'neededCost' },
    { Header: '', accessor: 'fundedSum' },
    { Header: '', accessor: 'neededSum' },
    {
        Header: '',
        accessor: 'subscriber',
        cell: SubscriberCell,
    },
];

export let mobileColumns = [
    { Header: 'Title', accessor: 'title', cell: LinkCell },
    { Header: 'Close', accessor: 'close', cell: CloseCell },
    { Header: 'Brief', accessor: 'brief' },
    { Header: 'Page', accessor: 'page' },
    { Header: 'Lang', accessor: 'lang' },
    { Header: 'Progress', accessor: 'progress', cell: ProgressCell },
    { Header: 'Cover', accessor: 'cover', cell: CoverCell },
    { Header: 'Authors', accessor: 'authors', cell: AuthorsCell },
    { Header: 'minCost', accessor: 'minCost' },
    { Header: 'royalty', accessor: 'royalty', cell: RoyaltyCell },
    { Header: 'neededCost', accessor: 'neededCost' },
    { Header: 'fundedSum', accessor: 'fundedSum' },
    { Header: 'neededSum', accessor: 'neededSum' },
    {
        Header: 'subscriber',
        accessor: 'subscriber',
        cell: SubscriberCell,
    },
];

