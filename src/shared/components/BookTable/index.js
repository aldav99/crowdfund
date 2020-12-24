import React from 'react';

import withLoading from '../../HOC/withLoading';

import { FeedbackForm } from './FeedbackForm';

import { GenerateTable } from '../../elements/GenerateTable';

import RoyaltyCell from "../TableRow/cells/RoyaltyCell";
import { AuthorsCell } from '../TableRow/cells/AuthorTableCell';
import { LinkCell } from '../TableRow/cells/LinkCell';
import { CoverCell } from '../TableRow/cells/CoverCell';
import { CloseCell } from '../TableRow/cells/CloseCell';
import { ProgressCell } from '../TableRow/cells/ProgressCell'
import { SubscriberCell } from '../TableRow/cells/SubscriberCell'
import { SubscribeModal } from '../TableRow/cells/SubscribeModal'

export let columns = [
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
    },
    {
        Header: 'subscriberWindow',
        accessor: 'subscriberWindow',
        cell: SubscribeModal
    }
];


class BookTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
        };
        this.removeFromTable = this.removeFromTable.bind(this);
    }

    removeFromTable(bookId) {
        this.setState(function (state) {
            const elem = state.books.find(book => book.id == bookId)

            const newState = [...state.books.filter(book => book.id != bookId), elem]

            return {
                books: newState
            }
        });
    }

    render() {
        console.log('render BookTable')
        const { books } = this.state;
        let elem = columns.find(column => column.accessor == 'close')

        if (elem)
            elem.removeFromTable = this.removeFromTable

        return (
            <React.Fragment>
                <GenerateTable rows={books} columns={columns} />
                <FeedbackForm />
            </React.Fragment>
        );
    }
}

export default withLoading(BookTable);