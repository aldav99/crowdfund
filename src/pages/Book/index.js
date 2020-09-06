import React from 'react';

import Layout from '../../shared/Layout.js'

import { BookInfo } from '../../BookInfo.js'
import useBooks from '../../hooks/useBooks.js'

function Book({ match: { params } }) {
    
    let [books, authors] = useBooks()

    return (
        <Layout>
            {(books && authors) ?
                <BookInfo book={books.filter(book => book.Id == params.Id)[0]} authors={authors} />
                : <div>Loading...</div>}
        </Layout>
    )
}

export default Book;

