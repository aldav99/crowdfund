import React from 'react';

import Layout from '../../shared/Layout/Layout.js'

import useBooks from '../../shared/hooks/useBooks'

import { Helmet } from 'react-helmet';

import { useHistory } from "react-router";

import BookTable from '../../shared/components/BookTable/index.js';

function Book({ match: { params } }) {

    let [books, authors] = useBooks();
    const history = useHistory();

    console.log(books, authors);

    return (
      <Layout>
        <button
          onClick={() => {
            if (history.action === 'PUSH') history.goBack();
            else history.push('/');
          }}
        >
          Go home
        </button>
        
        <BookTable
          authors={authors}
          books={books && books.filter((book) => book.Id == params.Id)}
          isLoading={!(books && authors)}
        />

        {books ? (
          <Helmet>
            <title>
              {books.filter((book) => book.Id == params.Id)[0].title}
            </title>
          </Helmet>
        ) : null}
      </Layout>
    );
}

export default Book;
