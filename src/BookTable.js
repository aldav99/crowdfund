import React from 'react';
import { FeedbackForm } from './FeedbackForm';
import { GenerateTable, Table } from './Refactor';

export const columns = [
    { Header: '', accessor: 'title', cell: { LinkCell } },
    { Header: '', accessor: 'close', cell: { CloseCell } },
    { Header: '', accessor: 'brief' },
    { Header: '', accessor: 'page' },
    { Header: '', accessor: 'lang' },
    { Header: '', accessor: 'progress', cell: { ProgressCell } },
    { Header: '', accessor: 'cover', cell: { CoverCell } },
    { Header: '', accessor: 'authors', cell: { AuthorsCell } },
    { Header: '', accessor: 'minCost' },
    { Header: '', accessor: 'royalty', cell: { RoyaltyCell } },
    { Header: '', accessor: 'neededCost' },
    { Header: '', accessor: 'fundedSum' },
    { Header: '', accessor: 'neededSum' },
    {
        Header: '', accessor: 'subscriber',
        cell: { SubscriberCell }
    }
]

export const mobileColumns = [
    { Header: 'Title', accessor: 'title', cell: { LinkCell } },
    { Header: 'Close', accessor: 'close', cell: { CloseCell } },
    { Header: 'Brief', accessor: 'brief' },
    { Header: 'Page', accessor: 'page' },
    { Header: 'Lang', accessor: 'lang' },
    { Header: 'Progress', accessor: 'progress', cell: { ProgressCell } },
    { Header: 'Cover', accessor: 'cover', cell: { CoverCell } },
    { Header: 'Authors', accessor: 'authors', cell: { AuthorsCell } },
    { Header: 'minCost', accessor: 'minCost' },
    { Header: 'royalty', accessor: 'royalty', cell: { RoyaltyCell } },
    { Header: 'neededCost', accessor: 'neededCost' },
    { Header: 'fundedSum', accessor: 'fundedSum' },
    { Header: 'neededSum', accessor: 'neededSum' },
    {
        Header: 'subscriber', accessor: 'subscriber',
        cell: { SubscriberCell }
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




