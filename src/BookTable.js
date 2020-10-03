import React from 'react';
import { FeedbackForm } from './FeedbackForm';
import { GenerateTable } from './Refactor';
// ------------------------------------------------------------------------
import { TableBooks, TheadBooks, Tbody, Tr, Td, Span } from './Table';

import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { percentOfProgress } from './percentOfProgress';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';

// -----------------------------------------------

// import { Royalty } from "./Royalty";

// export const CoverCell = ({ column, row }) => {
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span>{row[column.accessor] && <img src={row[column.accessor]} width="40" height="40"></img>}
//         </React.Fragment>
//     )
// }

// export const LinkCell = ({ column, row }) => {
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span><Link to={`/book/${row.Id}`}>{row[column.accessor]}</Link>
//         </React.Fragment>
//     )
// }

// export const CloseCell = ({ column, row, removeFromTable }) => {
//     if (removeFromTable) return (
//         <React.Fragment>
//             <Span>{column.Header}</Span><button onClick={() => removeFromTable(row.id)} className={styles.letter}>*</button>
//         </React.Fragment>
//     )
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span>Unaccessible
//         </React.Fragment>
//     )
// }

// export const ProgressCell = ({ column, row }) => {
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span>{percentOfProgress(row.fundedSum, row.neededSum)}
//         </React.Fragment>
//     )
// }

// export const AuthorsCell = ({ column, row }) => {
//     let authors = row.authorsList;
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span>{(authors) ? <AuthorTable
//                 authors={authors} /> : null}
//         </React.Fragment>
//     )
// }

// export const RoyaltyCell = ({ column, row }) => {
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span><Royalty minCost={row.minCost} />
//         </React.Fragment>
//     )
// }

// export const SubscriberCell = ({ column, row }) => {
//     if (row.subscriber > 10) return (
//         <React.Fragment>
//             <Span>{column.Header}</Span><b className={styles.letter}>{row.subscriber}</b>
//         </React.Fragment>
//     )
//     return (
//         <React.Fragment>
//             <Span>{column.Header}</Span>{row.subscriber}
//         </React.Fragment>)
// }

export const columns = [
    { Header: '', accessor: 'title', cell: 'LinkCell' },
    { Header: '', accessor: 'close', cell: 'CloseCell' },
    { Header: '', accessor: 'brief' },
    { Header: '', accessor: 'page' },
    { Header: '', accessor: 'lang' },
    { Header: '', accessor: 'progress', cell: 'ProgressCell' },
    { Header: '', accessor: 'cover', cell: 'CoverCell' },
    { Header: '', accessor: 'authors', cell: 'AuthorsCell' },
    { Header: '', accessor: 'minCost' },
    { Header: '', accessor: 'royalty', cell: 'RoyaltyCell' },
    { Header: '', accessor: 'neededCost' },
    { Header: '', accessor: 'fundedSum' },
    { Header: '', accessor: 'neededSum' },
    {
        Header: '', accessor: 'subscriber',
        cell: 'SubscriberCell'
    }
]

export const mobileColumns = [
    { Header: 'Title', accessor: 'title', cell: 'LinkCell' },
    { Header: 'Close', accessor: 'close', cell: 'CloseCell' },
    { Header: 'Brief', accessor: 'brief' },
    { Header: 'Page', accessor: 'page' },
    { Header: 'Lang', accessor: 'lang' },
    { Header: 'Progress', accessor: 'progress', cell: 'ProgressCell' },
    { Header: 'Cover', accessor: 'cover', cell: 'CoverCell' },
    { Header: 'Authors', accessor: 'authors', cell: 'AuthorsCell' },
    { Header: 'minCost', accessor: 'minCost' },
    { Header: 'royalty', accessor: 'royalty', cell: 'RoyaltyCell' },
    { Header: 'neededCost', accessor: 'neededCost' },
    { Header: 'fundedSum', accessor: 'fundedSum' },
    { Header: 'neededSum', accessor: 'neededSum' },
    {
        Header: 'subscriber', accessor: 'subscriber',
        cell: 'SubscriberCell'
    }
]



export class BookTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            columns: columns,
            mobileColumns: mobileColumns
        };
        this.removeFromTable = this.removeFromTable.bind(this);
    }

    removeFromTable(bookId) {
        this.setState(function (state) {
            let elem = state.books.find(book => book.id == bookId)

            let newState = [...state.books.filter(book => book.id != bookId), elem]

            return {
                books: newState
            }
        });
    }

    render() {
        console.log('render BookTable')
        const { books, mobileColumns, columns } = this.state;
        return (
            <React.Fragment>
                <GenerateTable removeFromTable={this.removeFromTable} rows={books} mobileColumns={mobileColumns} columns={columns} />
                <FeedbackForm></FeedbackForm>
            </React.Fragment>
        );
    }
}




