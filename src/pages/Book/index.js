import React from 'react';

import Layout from '../../shared/Layout.js'

import useBooks from '../../hooks/useBooks.js'

import { TrOfTable } from '../../TrOfTable'

import { Helmet } from 'react-helmet';

import { TableBooks, TheadBooks, Tbody } from '../../Table';

import { useHistory } from "react-router";

function Book({ match: { params } }) {

    let [books, authors] = useBooks();
    const history = useHistory();

    return (
        <Layout>
            <button onClick={() => {
                history.goBack();
            }}>
                Go home
            </button>
            <TableBooks>
                <TheadBooks />
                <Tbody>
                    {(books && authors) ?
                        <TrOfTable book={books.filter(book => book.Id == params.Id)[0]} authors={authors} />
                        : <tr><td>Loading...</td></tr>}
                </Tbody>
            </TableBooks>

            {(books) ?
                <Helmet>
                    <title>{books.filter(book => book.Id == params.Id)[0].title}</title>
                </Helmet> : null
            }
        </Layout>
    )
}

export default Book;
