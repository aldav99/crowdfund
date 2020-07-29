import React from 'react';
import { BookRow } from './BookRow';
export class BookTable extends React.Component {
    render() {

        const books = this.props.books;
        const rows = books.map((book) => <BookRow book={book} key={book.id} />);

        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Brief</th>
                        <th>Page</th>
                        <th>Lang</th>
                        <th>Progress</th>
                        <th>Cover</th>
                        <th>Author</th>
                        <th>minCost</th>
                        <th>neededCost</th>
                        <th>fundedSum</th>
                        <th>neededSum</th>
                        <th>subscriber</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
