import React from 'react';
import { FeedbackForm } from './FeedbackForm';
import { GenerateTable } from './Refactor';

import { columns, mobileColumns } from './../Book/components/TableRow';

export class BookTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books
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
        const { books } = this.state;

        return (
            <React.Fragment>
                <GenerateTable removeFromTable={this.removeFromTable} rows={books} mobileColumns={mobileColumns} columns={columns} />
                <FeedbackForm></FeedbackForm>
            </React.Fragment>
        );
    }
}




