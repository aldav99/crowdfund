import React from 'react';
import { Td, Span } from "./../../styles/Table"
import { AuthorTable } from './AuthorTable';
import { percentOfProgress } from './percentOfProgress';
import styles from "./../../styles/style.module.css";
import { Link } from 'react-router-dom';
import { Royalty } from "./Royalty";

const CoverCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row[column.accessor] && <img src={row[column.accessor]} width="40" height="40"></img>}
        </React.Fragment>
    );
};
const LinkCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span><Link to={`/book/${row.Id}`}>{row[column.accessor]}</Link>
        </React.Fragment>
    );
};
const CloseCell = ({ column, row, removeFromTable }) => {
    if (removeFromTable)
        return (
            <React.Fragment>
                <Span>{column.Header}</Span><button onClick={() => removeFromTable(row.id)} className={styles.letter}>*</button>
            </React.Fragment>
        );
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>Unaccessible
        </React.Fragment>
    );
};
const ProgressCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{percentOfProgress(row.fundedSum, row.neededSum)}
        </React.Fragment>
    );
};
const AuthorsCell = ({ column, row }) => {
    let authors = row.authorsList;
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{(authors) ? <AuthorTable
                authors={authors} /> : null}
        </React.Fragment>
    );
};
const RoyaltyCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span><Royalty minCost={row.minCost} />
        </React.Fragment>
    );
};
const SubscriberCell = ({ column, row }) => {
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


export const TableRow = ({ row, columns, removeFromTable }) => {
    if (!row)
        return null;
    return columns.map(column => {
        const CellComponent = column.cell;
        return (
            <Td key={column.accessor}>
                {CellComponent ? <CellComponent row={row} column={column} removeFromTable={removeFromTable} authors={row.authorsList} /> : row[column.accessor]}
            </Td>
        );
    });
};

export const columns = [
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
        Header: '', accessor: 'subscriber',
        cell: SubscriberCell
    }
];

export const mobileColumns = [
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
        Header: 'subscriber', accessor: 'subscriber',
        cell: SubscriberCell
    }
];
