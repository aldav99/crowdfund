import React from 'react';
import { BookRows } from './BookRows';
import { FeedbackForm } from './FeedbackForm';
import { Table } from './Refactor';

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



export class BookTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            authors: this.props.authors
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
        const { books, authors } = this.state;
        return (
            <React.Fragment>
                <Table removeFromTable={this.removeFromTable} rows={books} authors={authors} columns={columns} />
                <FeedbackForm></FeedbackForm>
            </React.Fragment>
        );
    }
}




