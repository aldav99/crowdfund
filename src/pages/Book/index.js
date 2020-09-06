import React from 'react';

import Layout from '../../shared/Layout.js'

import useBooks from '../../hooks/useBooks.js'

import { TrOfTable } from '../../TrOfTable'

import { TableBooks, TheadBooks, Tbody } from '../../Table';

function Book({ match: { params } }) {

    let [books, authors] = useBooks()

    return (
        <Layout>
            <TableBooks>
                <TheadBooks />
                <Tbody>
                    {(books && authors) ?
                        <TrOfTable book={books.filter(book => book.Id == params.Id)[0]} authors={authors} />
                        : null}
                </Tbody>
            </TableBooks>
        </Layout>
    )
}

export default Book;
