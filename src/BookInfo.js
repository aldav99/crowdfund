import React from 'react';

import { AuthorTable } from './AuthorTable';

import { percentOfProgress } from './percentOfProgress';

const styles = {
    letter: {
        color: 'red'
    }
}

export const BookInfo = React.memo(({ book, authors }) => {
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
            <tbody>
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.brief}</td>
                    <td>{book.page}</td>
                    <td>{book.lang}</td>
                    <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                    <td><img src={book.cover} width="40"
                        height="40"></img></td>
                    <td><AuthorTable
                        authors={authors.filter(author => book.authors.includes(author.id))} />
                    </td>
                    <td>{book.minCost}</td>
                    <td>{book.neededCost}</td>
                    <td>{book.fundedSum}</td>
                    <td>{book.neededSum}</td>
                    {
                        (book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                            : <td>{book.subscriber}</td>
                    }
                </tr>)
            </tbody>
        </table>)
})