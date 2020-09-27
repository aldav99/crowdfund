import React from 'react';
import { TableBooks, TheadBooks, Tbody, Tr, Td, Span } from './Table';
import { useMediaQuery } from 'react-responsive'
import { TrOfTable } from './TrOfTable';

import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { percentOfProgress } from './percentOfProgress';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import { Royalty } from './BookRows';
//-------------------------------------------------------------------------

const columns = [
    { Header: 'Title', accessor: 'title', cell={ LinkCell } },
    { Header: 'Close', accessor: 'close', cell={ CloseCell } },
    { Header: 'Brief', accessor: 'brief' },
    { Header: 'Page', accessor: 'page' },
    { Header: 'Lang', accessor: 'lang' },
    { Header: 'Progress', accessor: 'progress', cell={ ProgressCell } },
    { Header: 'Cover', accessor: 'cover', cell={ CoverCell } },
    { Header: 'Authors', accessor: 'authors', cell={ AuthorsCell } },
    { Header: 'minCost', accessor: 'minCost' },
    { Header: 'royalty', accessor: 'royalty', cell={ RoyaltyCell } },
    { Header: 'neededCost', accessor: 'neededCost' },
    { Header: 'fundedSum', accessor: 'fundedSum' },
    { Header: 'neededSum', accessor: 'neededSum' },
    { Header: 'subscriber', accessor: 'subscriber', cell={ SubscriberCell } }
]

//-----------------------------------------------------------------------

const CoverCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row[column.accessor] && <img src={row[column.accessor]} width="40" height="40"></img>}
        </React.Fragment>
    )
}

const LinkCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span><Link to={`/book/${row.Id}`}>{row[column.accessor]}</Link>
        </React.Fragment>
    )
}

const CloseCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span><button onClick={() => removeFromTable(row.id)} className={styles.letter}>*</button>
        </React.Fragment>
    )
}

const ProgressCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{percentOfProgress(row.fundedSum, row.neededSum)}
        </React.Fragment>
    )
}

const AuthorsCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{(authors) ? <AuthorTable
                authors={findAuthors(row, authors)} /> : null}
        </React.Fragment>
    )
}

const RoyaltyCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span><Royalty minCost={row.minCost} />
        </React.Fragment>
    )
}

const SubscriberCell = ({ column, row }) => {
    if (row.subscriber > 10) return (
        <React.Fragment>
            <Span>{column.Header}</Span><Span className={styles.letter}>{row.subscriber}</Span>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row.subscriber}
        </React.Fragment>)
}
// <Table columns={columns} rows={books}/>

export const Table = ({ rows, columns, authors, removeFromTable }) => {
    columns.map(column => {
        const CellComponent = column.cell;

        return (
            <td>
                {
                    CellComponent ? <CellComponent row={row} column={column} /> : row[column.accessor]
                }
            </td>
          )
        })
}



//-----------------------------------------------------------------------

function findAuthors(book, authors) {
    if (!book.authors) return null;
    authors = authors.filter(author => book.authors.includes(author.id))

    return authors
}
