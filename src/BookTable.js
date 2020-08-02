import React from 'react';
import { BookRow } from './BookRow';
import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { percentOfProgress } from './percentOfProgress';
import { FeedbackForm } from './FeedbackForm';

const styles = {
    letter: {
        color: 'red'
    }
}


export const BookTable = (props) => {
    const books = props.books;

    return (
        <React.Fragment>
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
                <tbody>
                    {books.map(function (book, key) {
                        return (
                            <BookRow key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.brief}</td>
                                <td>{book.page}</td>
                                <td>{book.lang}</td>
                                <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                                <td><img src={book.cover} width="40"
                                    height="40"></img></td>
                                <td><AuthorTable authors={book.authors} /></td>

                                <td>{book.minCost}</td>
                                <td>{book.neededCost}</td>
                                <td>{book.fundedSum}</td>
                                <td>{book.neededSum}</td>

                                {(book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                                    : <td>{book.subscriber}</td>}
                                <td><SubscribeModal /></td>
                            </BookRow>
                        );
                    })}
                </tbody>
            </table>
            <FeedbackForm></FeedbackForm>
        </React.Fragment>
    );
}



