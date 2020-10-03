import React from 'react';
import { TableBooks, TheadBooks, Tbody, Tr, Td, Span } from './Table';
import { useMediaQuery } from 'react-responsive'
import { TrOfTable } from './TrOfTable';

import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { percentOfProgress } from './percentOfProgress';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import { Royalty } from "./Royalty";

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

const CloseCell = ({ column, row, removeFromTable }) => {
    if (removeFromTable) return (
        <React.Fragment>
            <Span>{column.Header}</Span><button onClick={() => removeFromTable(row.id)} className={styles.letter}>*</button>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>Unaccessible
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
    let authors = row.authorsList;
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{(authors) ? <AuthorTable
                authors={authors} /> : null}
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
            <Span>{column.Header}</Span><b className={styles.letter}>{row.subscriber}</b>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row.subscriber}
        </React.Fragment>)
}

// const componentsMap = { LinkCell, CloseCell, ProgressCell, CoverCell, AuthorsCell, RoyaltyCell, SubscriberCell };

export const TableRow = ({ row, columns, removeFromTable }) => {
    if (!row) return null;
    return columns.map(column => {
        // const componentName = column.cell;
        // const CellComponent = componentsMap[componentName];
        const CellComponent = column.cell
        return (
            <Td key={column.accessor}>
                {
                    CellComponent ? <CellComponent row={row} column={column} removeFromTable={removeFromTable} authors={row.authorsList} /> : row[column.accessor]
                }
            </Td>
        )
    })
}

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
