import React from 'react';

import Layout from '../../shared/Layout.js'

import { BookInfo } from '../../BookInfo.js'
import useBooks from '../../hooks/useBooks.js'

function Book({ match: { params } }) {
    let [books, authors] = useBooks()
    let book = books.filter(book => book.Id == params.Id)[0]

    return (
        <Layout>
            {(books && authors) ?
                <BookInfo book={book} authors={authors} />
                : <div>Loading...</div>}
        </Layout>
    )
}

export default Book;

