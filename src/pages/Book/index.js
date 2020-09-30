import React from 'react';

import Layout from '../../shared/Layout.js'

import useBooks from '../../hooks/useBooks.js'

import { TrOfTable } from '../../TrOfTable'

import { TableRow, columns } from '../../Refactor'

import { Helmet } from 'react-helmet';

import { TableBooks, TheadBooks, Tbody } from '../../Table';

import { useHistory } from "react-router";

function Book({ match: { params } }) {

    let [books, authors] = useBooks();
    const history = useHistory();

    return (
        <Layout>
            <button onClick={() => {
                if (history.action === 'PUSH')
                    history.goBack();
                else
                    history.push('/');
            }}>
                Go home
            </button>
            <TableBooks>
                <TheadBooks />
                <Tbody>
                    {(books && authors) ?
                        <TableRow row={books.filter(book => book.Id == params.Id)[0]} authors={authors} columns={columns} />
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
